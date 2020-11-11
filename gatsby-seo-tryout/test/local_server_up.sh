#!/usr/bin/env bash

set -ex


trap 'error_exit' ERR KILL EXIT
error_exit() {
  kill $LIVE_SERVER_PID
  rm -rf $TMP_DIR
}

TMP_DIR=$(mktemp -d)

test/test_build.sh $TMP_DIR

pushd $TMP_DIR

  pushd public
    live-server --port=8002 . &
    LIVE_SERVER_PID=$!
  popd

popd

echo "local server ready, sleep in background"
sleep 900
