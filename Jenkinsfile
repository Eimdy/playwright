pipeline {
    agent any
    
    triggers {
        cron('H 4 * * 1-5')
    }
    
    parameters {
        string(name: 'BRANCH_NAME', defaultValue: 'main', description: 'Branch Name')
        choice(name: 'TYPE', choices: ['All', '@SMOKE', '@REGRESSION'], description: 'Type of Test')
        string(name: 'WORKERS', defaultValue: '1', description: 'Numbers of Worker')
    }
    
    environment {
        CI = 'true'
    }

    stages {
        stage('Download & Setup Node.js') {
            steps {
                sh '''
                if [ ! -d "node-v24.15.0-linux-x64" ]; then
                    echo "Mendownload Node.js..."
                    curl -O https://nodejs.org/dist/v24.15.0/node-v24.15.0-linux-x64.tar.gz
                    tar -xzf node-v24.15.0-linux-x64.tar.gz
                else
                    echo "Node.js exist, skip download."
                fi
                '''
            }
        }

        stage('Checkout Repository') {
            steps {
                git branch: "${params.BRANCH_NAME}", url: 'https://github.com/Eimdy/playwright.git'
            }
        }

        stage('Install Node Modules') {
            steps {
                sh '''
                export PATH="$WORKSPACE/node-v24.15.0-linux-x64/bin:$PATH"
                npm ci
                '''
            }
        }

        stage('Install Playwright & OS Dependencies') {
            steps {
                sh '''
                export PATH="$WORKSPACE/node-v24.15.0-linux-x64/bin:$PATH"
                npx playwright install
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh '''
                export PATH="$WORKSPACE/node-v24.15.0-linux-x64/bin:$PATH"

                TYPE_FLAG=""
                if [ "$TYPE" != "All" ]; then
                    TYPE_FLAG="--grep $TYPE"
                fi

                echo "======================================================="
                echo "Running On branch      : $BRANCH_NAME"
                echo "Filter                 : TYPE"
                echo "Workers                : $WORKERS"
                echo "======================================================="
                
                npx playwright test $TYPE_FLAG --workers=$WORKERS
                '''
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'test-results/results.json', allowEmptyArchive: true
            
            script {
                try {
                    def report = readJSON file: 'test-results/results.json'
            
                    def success = report.stats.expected
                    def failed  = report.stats.unexpected
                    def skip    = report.stats.skipped
                    def total   = success + failed + skip
                    def duration = Math.round(report.stats.duration / 1000)
                    
                    def slackColor = failed > 0 ? '#FF0000' : '#00FF00'
                    def statusText = failed > 0 ? "*FAILED*" : "*PASSED*"
            
                    def slackMessage = """${statusText} : (Build #${env.BUILD_NUMBER})
                    *Branch:* `${params.BRANCH_NAME}`
                    *Type:* `${params.TYPE}`

                    *Generated Report :*
                    • Total Test: ${total}
                    • Passed: ${success}
                    • Failed: ${failed}
                    • Skipped: ${skip}
                    • Duration: ${duration} Second

                    <${env.BUILD_URL}artifact/playwright-report/index.html| Full Report>"""
                    slackSend (
                        channel: 'C0B1Q7USLD7',
                        color: slackColor,
                        message: slackMessage
                    )
            
                } catch (Exception e) {
                    echo "Error: ${e.getMessage()}"
                    
                    slackSend ( 
                        channel: 'C0B1Q7USLD7', 
                        color: '#FF0000',
                        message: "*PIPELINE ERROR:* Log Jenkins: <${env.BUILD_URL}|Build #${env.BUILD_NUMBER}>"
                    )
                }
            }
        }
    }
}