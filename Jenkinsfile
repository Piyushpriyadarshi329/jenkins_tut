pipeline {
    agent any
    stages {

        stage('Build') {
            steps {
               echo "Build Stage"
               git   url: 'https://github.com/Piyushpriyadarshi329/jenkins_tut.git',
                branch: 'main'
            }
        }
        stage('Image Build') {
            steps {
              echo "Image build"
              sh "docker build -t myapp ."
            }
        }
          stage('Image Push to Docker Hub') {
            steps {
              echo "Image Push to Docker Hub"
              withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'dockerhubpwd', usernameVariable: 'dockerhubusename')]){
              echo "${env.dockerhubusename} , ${env.dockerhubpwd}"
              sh "docker tag myapp ${env.dockerhubusename}/myapp:latest"
              sh "docker login -u ${env.dockerhubusename} -p ${env.dockerhubpwd}"
              sh "docker push ${env.dockerhubusename}/myapp:latest"


            }
            }
        }
          stage('Deploy') {
            steps {
              echo "Deploy"
            //   sh "docker run -d -p 5001:5001 piyushp329/myapp:latest"
            sh "docker-compose down && docker-compose up -d"
              echo "Deploy done"


            }
        }
    }
  
}