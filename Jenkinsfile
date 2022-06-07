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
            stage("Deploy") {
            steps {
                echo " Hello"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/lib/jenkins/workspace/jenkins-testing"
            }
        }
    }
}