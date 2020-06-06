#!/usr/bin/env bash

set -ex

yarn

nodemon -w src --exec "yarn clean && yarn develop"

# https
# gatsby develop -S

yarn start
