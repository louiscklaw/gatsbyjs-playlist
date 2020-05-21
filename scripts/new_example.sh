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

yarn add @material-ui/core

yarn add @fortawesome/fontawesome-svg-core  @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome
# yarn add @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons

yarn add gatsby-source-filesystem

# gatsby-plugin-google-analytics, UA-167147273-1
yarn add gatsby-plugin-google-analytics

yarn add gatsby-plugin-sitemap

read -p 'press any key to build'

gatsby build

cp .cache/default-html.js src/html.js

find src |entr -c -s "gatsby develop"
