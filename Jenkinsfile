pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo rm -rf /var/www/jenkins"
                sh "git clone https://github.com/muano30/React-Form-Ratings.git"
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/jenkins"
                // sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}