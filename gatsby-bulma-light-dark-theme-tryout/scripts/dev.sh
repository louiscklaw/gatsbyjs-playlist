#!/usr/bin/env bash

nodemon -w src --exec "yarn css-build && yarn start" &
