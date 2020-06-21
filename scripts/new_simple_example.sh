#!/usr/bin/env bash

set -ex

TEST=`echo $PWD|rev |cut -d'/' -f1 |rev`

gatsby new .

yarn add prettier --dev --exact

yarn add gatsby-plugin-offline

echo -e "\a"
echo -e "if you need to install custom npm package, please do it now"
read -p 'press any key to start yarn build'


mkdir static
mkdir src/templates
mkdir plugins

gatsby build

cp .cache/default-html.js src/html.js


git init
git add .
git commit . -m"ci: init new example $1"

yarn develop
