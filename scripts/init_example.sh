#!/usr/bin/env bash

set -ex

mkdir $1

cd $1

git checkout -b test/$1
