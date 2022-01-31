#!/usr/bin/env bash

TW="/Applications/TiddlyDesktop.app/Contents/Resources/app.nw/tiddlywiki/tiddlywiki.js"
node "$TW" --output . --build index
