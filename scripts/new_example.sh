#!/usr/bin/env bash

set -ex

gatsby new .

yarn add prettier --dev --exact

# layout
yarn add gatsby-plugin-typography react-typography typography typography-theme-fairy-gates

gatsby develop
