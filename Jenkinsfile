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
        stage('Build Docker Image') {
            steps {
                script {
                    bat 'docker build -t csi402-app-image .'

                    bat 'docker run -d --name csi-container -p 54100:3000 csi402-app-image:latest'
                }
            }
        }
    }
}