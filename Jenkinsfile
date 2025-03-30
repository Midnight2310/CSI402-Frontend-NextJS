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
                print "Docker Build Image"
                script {
                        bat "docker build -t csi402-app-image ."
                        print "Docker Build Image Success"
                }

                print "Docker Image to Running Container"
                script {
                    bat "docker rm -f csi402-app-image-run || true"
                    bat "docker run -d --name csi402-app-image-run -p 54100:3000 csi402-app-image:latest"
                    print "Docker Image to Running Container Success"     
                }
		
            }
        }
        stage('Test') {
            steps {
		        print "Clone Automation Testing Project"
                checkout([
	                $class: 'GitSCM', 
	                branches: [[name: '*/main']], 
	                userRemoteConfigs: [  [ 
                        credentialsId: 'Nine',
			            url: 'https://github.com/Midnight2310/CSI403-automate.git' 
			        ]  ]
            	])
		
			print "Install Robot"
			bat 'curl -sS https://bootstrap.pypa.io/get-pip.py -o get-pip.py'
	                bat 'python3 get-pip.py'
	                bat 'pip3 install robotframework'
	                print "Install Selenium Library"
	                bat 'pip3 install robotframework-seleniumlibrary'
			print "Verify Robot Framework installation"
	                bat 'pip3 show robotframework'
	                print "Run Robot Framework Tests"
	                bat 'python3 -m robot testSPU.robot'
		
            }
        }
    }
}