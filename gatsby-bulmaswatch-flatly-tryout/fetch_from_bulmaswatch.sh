#!/usr/bin/env bash

CWD=$PWD
TMP_DIR=$(mktemp -d)

PROJ_HOME=$PWD
PROJ_SCSS=$PROJ_HOME/src/scss

cd $TMP_DIR
  git clone --depth=1 https://github.com/jenil/bulmaswatch.git
  cd bulmaswatch
    DIR_WITH_BULMAS_SCSS=$(ls -1 */bulmaswatch.scss)

    for i in $DIR_WITH_BULMAS_SCSS; do
      echo $i
      DIR=$(dirname $i)

      BULMASWATCH_SCSS=$TMP_DIR/bulmaswatch/$DIR
      mkdir -p $PROJ_SCSS/$DIR
      cp -r $BULMASWATCH_SCSS/*.scss $PROJ_SCSS/$DIR

    done

cd $CWD


# modify file content
cd $PROJ_SCSS
  for i in $(ls -1 */bulmaswatch.scss); do
    sed -i -e 's/bulma/bulma\/bulma.sass/' $i
  done

  for i in $(ls -1 */bulmaswatch.scss); do
    BULMAWATCH_MODULE_FILENAME=$(dirname $i)/bulmaswatch.module.scss
    mv $PROJ_SCSS/$i $BULMAWATCH_MODULE_FILENAME

  done

cd $CWD


# generate import string

cd $PROJ_SCSS
  for i in $(ls -1 */bulmaswatch.module.scss); do
    THEME_NAME=$(dirname $i)
    echo "import "$THEME_NAME"_style from '../scss/"$THEME_NAME"/bulmaswatch.module.scss'"
  done
cd $CWD


# after patch