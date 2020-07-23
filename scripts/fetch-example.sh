#!/usr/bin/env bash

set -ex

mkdir -p tmp

cd tmp
  rm -rf gatsby
  git clone --depth=1 git@github.com:gatsbyjs/gatsby.git
cd ..

cd offical-example
  rm -rf * &
  rm -rf .* &
  wait

  rsync -avzh ../tmp/gatsby/examples/ .
cd ..