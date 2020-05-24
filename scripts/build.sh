#!/usr/bin/env bash

set -ex

export GATSBY_CPU_COUNT=99

gatsby clean

yarn install

gatsby build --prefix-paths