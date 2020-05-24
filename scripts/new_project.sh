#!/usr/bin/env bash

set -x

DEST_DIR=/home/logic/_workspace/hk-data-search

cd $DEST_DIR
  rm -rf *
  rm -rf .*

  set -ex

  gatsby new .
  git flow init -d

  yarn add prettier --dev --exact

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
  # yarn add gatsby-plugin-google-analytics

  yarn add gatsby-plugin-sitemap

  # i18n
  yarn add gatsby-plugin-i18n

  mkdir static
  mkdir src/templates
  mkdir plugins

  gatsby build

  cp .cache/default-html.js src/html.js

  git add .

cd -


cp -r scripts $DEST_DIR