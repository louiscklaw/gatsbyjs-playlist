#!/usr/bin/env bash

set -x

rm -rf * .*

TEST=`echo $PWD|rev |cut -d'/' -f1 |rev`
git branch -D test/$TEST
git checkout -b test/$TEST

rsync -avz --exclude 'node_modules' --exclude 'public' ../offical-example/$1/ .

set -ex

yarn

yarn clean

yarn build

yarn start

set +ex
