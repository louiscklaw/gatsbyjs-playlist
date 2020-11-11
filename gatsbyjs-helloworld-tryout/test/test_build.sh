#!/usr/bin/env bash

set -ex

trap 'error_exit' ERR KILL EXIT
error_exit() {
  rm -rf $TMP_DIR
}

TMP_DIR=$1
echo $TMP_DIR

rsync -avzh \
  --exclude "node_modules" \
  --exclude "build" \
  --exclude ".cache" \
  --exclude ".git" \
  --exclude "public" \
  --progress ./ $TMP_DIR


pushd $TMP_DIR
  yarn
  yarn clean
  yarn build
popd
