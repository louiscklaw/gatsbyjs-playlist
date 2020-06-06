#!/usr/bin/env bash

set -ex

gatsby new .

yarn add prettier --dev --exact

# layout
yarn add gatsby-plugin-typography typography react-typography
yarn add typography-theme-fairy-gates typography-theme-kirkham

# CSSinJS
yarn add gatsby-plugin-emotion @emotion/core

# plugins
yarn add gatsby-source-filesystem

yarn add gatsby-transformer-remark

# PWA
yarn add --dev https
yarn add gatsby-plugin-manifest
yarn add gatsby-plugin-offline

# page metadata
yarn add gatsby-plugin-react-helmet react-helmet

yarn add @material-ui/core

yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons

# gatsby-plugin-google-analytics, UA-167147273-1
yarn add gatsby-plugin-google-analytics

yarn add gatsby-plugin-sitemap

# page transition
yarn add gatsby-plugin-transition-link
yarn add gsap

# i18n
yarn add gatsby-plugin-i18n

yarn add --dev gh-pages

echo -e "\a"
read -p 'press any key to build'

mkdir static
mkdir src/templates
mkdir plugins

gatsby build

cp .cache/default-html.js src/html.js

find src |entr -c -s "gatsby develop"
