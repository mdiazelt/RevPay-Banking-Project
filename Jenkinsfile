pipeline {
    agent any

    tools {
        // Install the Maven version configured as "M3" and add it to the path.
        maven "M3"
    }

    stages {
        stage('Build') {
            steps {
                // Get some code from a GitHub repository
                git branch:'maria', url:'https://github.com/mdiazelt/RevPay-Banking-Project.git'

                dir('backend') {
                // some block
                sh "mvn -Dmaven.test.failure.ignore=true clean package"
                sh "cp target/*.jar /usr/local/share/applications/bank-api/javaapp.jar"
                sh "sudo systemctl restart bank-api.service"
                junit '**/target/surefire-reports/TEST-*.xml'
                }
                // Run Maven on a Unix agent.

                // To run Maven on a Windows agent, use
                // bat "mvn -Dmaven.test.failure.ignore=true clean package"
            }

            post {
                // If Maven was able to run the tests, even if some of the test
                // failed, record the test results and archive the jar file.
                success {
                    
                }
            }
        }
    }
}
