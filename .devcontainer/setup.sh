sleep 5
gh codespace ports visibility 4200:public -c $CODESPACE_NAME
gh codespace ports visibility 4201:public -c $CODESPACE_NAME
echo "gh codespace ports -c $CODESPACE_NAME" >> ~/.bashrc
