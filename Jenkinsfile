//65054924 ปิยย์กฤษณ์ วงศ์เกษมศักดิ์
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                print "Checkout"
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [ [
                    credentialsId: 'Nine',
                    url: 'https://github.com/Midnight2310/CSI402-Frontend-NextJS.git'
                ] ]
                ])
                print "Checkout done"
            }
        }
        stage('Build') {
            steps {
                print "Build"
            }
        }
        stage('Deploy Image') {
            steps {
                print "Deploy Image"
            }
        }
        stage('Testing') {
            steps {
                print "Testing"
            }
        }
    }
}