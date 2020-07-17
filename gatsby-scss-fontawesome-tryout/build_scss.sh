#!/usr/bin/env bash

set -ex

rsync -avzh node_modules/@fortawesome/fontawesome-free/scss/ src/scss/fontawesome-free

rsync -avzh node_modules/@fortawesome/fontawesome-free/webfonts/ src/scss/webfonts