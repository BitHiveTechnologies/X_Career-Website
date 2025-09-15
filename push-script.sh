#!/bin/bash

echo "Git Push Helper Script"
echo "======================"
echo ""
echo "Choose your authentication method:"
echo "1. Personal Access Token (Recommended)"
echo "2. SSH Key"
echo "3. Create Pull Request"
echo "4. Show current status"
echo ""

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo "Using Personal Access Token method..."
        echo "Make sure you have a Personal Access Token with 'repo' permissions"
        echo "When prompted, use your GitHub username and the token as password"
        git push origin saurabh
        ;;
    2)
        echo "Using SSH method..."
        echo "Make sure your SSH key is added to your GitHub account"
        git remote set-url origin git@github.com:BitHiveTechnologies/X_Career-Website.git
        git push origin saurabh
        ;;
    3)
        echo "Creating pull request..."
        echo "You can create a pull request manually on GitHub:"
        echo "1. Go to https://github.com/BitHiveTechnologies/X_Career-Website"
        echo "2. Click 'Compare & pull request' for the saurabh branch"
        echo "3. Add your changes description"
        ;;
    4)
        echo "Current Git Status:"
        git status
        echo ""
        echo "Current remotes:"
        git remote -v
        echo ""
        echo "Last commit:"
        git log --oneline -1
        ;;
    *)
        echo "Invalid choice. Please run the script again."
        ;;
esac 