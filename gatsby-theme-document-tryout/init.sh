#!/usr/bin/env bash

set -x

rm -rf gatsby-theme-document

read -n 1 -r -s -p $'Press enter to continue...\n'

git clone git@github.com:codebushi/gatsby-theme-document.git

cd gatsby-theme-document

  yarn
  yarn add push-dir
  yarn build

  # git init
  # git add .
  # git commit -m"fresh install init commit,"

cd ..

# rsync -avzh ./overlay/ ./gatsby-theme-document/example

cd gatsby-theme-document
  yarn build
cd ..



# rm -rf document-site

# gatsby new document-site https://github.com/codebushi/gatsby-theme-document-example

# cd document-site
#   yarn
#   yarn add push-dir
#   yarn build

#   rsync -avzh ./overlay/ .
#   yarn build

# cd ..