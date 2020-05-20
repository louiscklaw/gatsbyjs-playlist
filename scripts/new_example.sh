#!/usr/bin/env bash

set -ex

gatsby new .

yarn add prettier --dev --exact

# layout
yarn add gatsby-plugin-typography react-typography typography typography-theme-fairy-gates

yarn add gatsby-plugin-typography typography react-typography typography-theme-kirkham gatsby-plugin-emotion @emotion/core

# plugins
yarn add gatsby-source-filesystem

yarn add gatsby-transformer-remark

# PWA
yarn add gatsby-plugin-manifest gatsby-plugin-offline

# page metadata
yarn add gatsby-plugin-react-helmet react-helmet

gatsby develop
