#!/usr/bin/env bash

set -ex

trap 'catch' ERR EXIT KILL
catch() {
  echo "error found"
  rm -rf $TMP_DIR
}

TMP_DIR=$(mktemp -d)

rsync -avzh --exclude "node_modules" --exclude "build"  --exclude ".cache" --progress ./ $TMP_DIR

cd $TMP_DIR
  yarn
  yarn build

cd public
  live-server --port=8001 .
