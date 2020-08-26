#!/usr/bin/env bash

set -ex

find in.html **/*.js |entr -c -s "./conv.sh"
