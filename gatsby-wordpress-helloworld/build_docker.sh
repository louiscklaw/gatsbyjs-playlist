#!/usr/bin/env bash

sudo rm -rf ./gatsby/app/node_modules

set -ex

docker compose up -d --build
sudo chown logic:logic -R ./

docker compose exec -it gatsby bash
