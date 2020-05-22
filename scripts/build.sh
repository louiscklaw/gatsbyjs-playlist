#!/usr/bin/env bash

set -ex

yarn install

gatsby clean

gatsby build
