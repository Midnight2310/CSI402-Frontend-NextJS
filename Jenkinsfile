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
                echo "Build"
                script {
                    sh "docker build -t csi403labapprouter:latest ."
                }
            }
        }
        stage('Deploy Image') {
            steps {
                echo "Deploy Image"
                script {
                    sh " docker create --name CSI403-Front csi403labapprouter:latest"
                }
            }
        }
        stage('Testing') {
            steps {
                echo "Testing"
                script {
                    sh "docker run -d --name CSI403-Front -p 3000:3005 csi403labapprouter:latest"
                }
                // Add actual test commands here, e.g., running automated tests.
            }
        }
    }
}
