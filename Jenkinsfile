node {
 stage('Preparation') { 
    git 'https://github.com/pkandel/node-boilerplate.git'
      // Name given here should match to the nodejs name
    env.NODEJS_HOME = "${tool 'Node_9'}"
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
 }
 stage('Backend Install') {
  echo'Installing backend dependencies build'
 }
  stage('Frontend Install') {
  echo'Installing frontend dependencies build'
 }
 stage('Results') {
    echo 'Results '
 }
}
