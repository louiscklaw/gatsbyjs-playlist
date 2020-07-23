#!/usr/bin/env bash

set -ex

cd gatsby-theme-document
  yarn build
cd ..

cd gatsby-theme-document/example
  yarn develop
