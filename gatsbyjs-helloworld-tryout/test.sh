#!/usr/bin/env bash

set -ex

TMP_DIR=$(mktemp -d)

trap 'catch' ERR EXIT KILL
catch() {
  kill $LIVE_SERVER_PID
  sleep 1
  rm -rf $TMP_DIR
}

test/test_build.sh
test/start_test_server.sh &
LIVE_SERVER_PID=$!

node test/puppeteer/puppeteer_helloworld.js
