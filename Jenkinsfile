pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "git clone https://github.com/muano30/React-Form-Ratings.git"
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
            stage("Test") {
            steps {
                echo "Hello, Jenkins"
            }
        }
        stage("Deploy") {
            steps {
                echo "Hello, Final Stage"
            }
        }
    }
}