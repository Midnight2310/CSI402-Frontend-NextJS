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
                script {
	                bat 'pip install robotframework'
	                bat 'pip install --upgrade robotframework-seleniumlibrary'
	                bat 'robot testSPU.robot'
                }
		
            }
        }
    }
}