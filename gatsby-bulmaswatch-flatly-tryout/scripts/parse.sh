#!/usr/bin/env bash

set -ex

# convert to jsx
node src/conv-to-jsx.js

# add combineStyles
node src/conv-class-className.js

# # replace fontawesome tags
node src/replace-fontawesome.js

# # replace html comments
# node src/replace-html-comments.js

# # pack to component
node src/make-component.js

# node src/split-sector.js
