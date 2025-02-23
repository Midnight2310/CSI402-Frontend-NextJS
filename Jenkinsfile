pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                echo "Checkout"
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        credentialsId: 'Nine',
                        url: 'https://github.com/Midnight2310/CSI402-Frontend-NextJS.git'
                    ]]
                ])
                echo "Checkout done"
            }
        }
        stage('Build') {
            steps {
                echo "Docker Build Image"
                script {
                    bat " docker build -t csi402labapprouterj ."
                }

                echo("Docker Image Running")
                script {
                    bat " docker run -d --name CSI403-frontend -p 5400:3000 csi402labapprouterj:latest"
                }
            }
        }
        stage('Deploy Image') {
            steps {
                echo "Deploy Image"
            }
        }
        stage('Testing') {
            steps {
                echo "Testing"
                // Add actual test commands here, e.g., running automated tests.
            }
        }
    }
}