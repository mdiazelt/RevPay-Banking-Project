pipeline {
    agent any

    tools {
        // Install the Maven version configured as "M3" and add it to the path.
        maven "M3"
    }

     // Get some code from a GitHub repository
    git branch:'maria', url:'https://github.com/mdiazelt/RevPay-Banking-Project.git'
    
    stages {
        stage('Build API') {
            steps {

                dir('backend') {
                // some block
                sh "mvn -Dmaven.test.failure.ignore=true clean package"
                sh "cp target/*.jar /usr/local/share/applications/bank-api/javaapp.jar"
                sh "sudo systemctl restart bank-api.service"
                junit '**/target/surefire-reports/TEST-*.xml'
                }
            }

        }
        stage('Build UI') {
            steps {
                dir('frontend') {
                    sh "npm install"
                    sh "npm run build"
                    sh "cp dist/bank-app/* /usr/share/nginx/html"
                }
            }
        }
    }
}
