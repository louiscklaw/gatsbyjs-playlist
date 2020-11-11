#!/usr/bin/env bash

set -ex

echo 'setup local test server instance'
test/local_server_up.sh &
LOCAL_SERVER_PID=$!

echo 'sleep a while to let server steady'
sleep 90

echo 'start test'
test/seo_test.sh

echo 'test done, kill local server isntance'
kill $LOCAL_SERVER_PID
