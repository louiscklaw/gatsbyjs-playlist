#!/usr/bin/env bash

set -ex

yarn

nodemon -w src --exec "gatsby clean && gatsby develop"

# https
# gatsby develop -S
