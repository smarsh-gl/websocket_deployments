
if [ -d "app" ]; then
  # Control will enter here if $DIRECTORY exists.
  cd app
  git pull origin master
  npm install
  cd ..
  forever restartall
else
  git clone https://github.com/smarsh-gl/websocket_deployments.git app
  cd app
  npm install 
  forever start ../forever.json  
  cd ..
fi