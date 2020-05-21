#!/usr/bin/env bash

set -ex

mkdir $1

cd $1

git checkout -b test/$1

../scripts/new_example.sh

git add $1
