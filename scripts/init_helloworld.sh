#!/usr/bin/env bash

set -x
rm -rf * .*

TEST=`echo $PWD|rev |cut -d'/' -f1 |rev`
git branch -D test/$TEST
git checkout -b test/$TEST

set -ex

gatsby new .

yarn
yarn add prettier --dev --exact
yarn add gatsby-plugin-offline

mkdir static
mkdir src/templates
mkdir plugins

yarn build
cp .cache/default-html.js src/html.js


git add .
git commit . -m"feat: init new example $TEST"
