#!/usr/bin/env bash

set -x

cd flatly
  sass -I /home/logic/_workspace/gatsbyjs-playlist/gatsby-bulmaswatch-tryout/node_modules bulmaswatch.module.scss test.css &
cd ..

cd journal
  sass -I /home/logic/_workspace/gatsbyjs-playlist/gatsby-bulmaswatch-tryout/node_modules bulmaswatch.module.scss test.css &
cd ..

wait
