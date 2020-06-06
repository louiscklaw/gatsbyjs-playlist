#!/usr/bin/env bash

set -ex

export GATSBY_CPU_COUNT=99

yarn install

yarn clean

yarn build --prefix-paths
