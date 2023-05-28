#!/bin/bash

message=$1

git config --global user.name 'deploy'
git config --global user.email 'deploy@users.noreply.github.com'

git add pages
git status
git commit -m $message
git push