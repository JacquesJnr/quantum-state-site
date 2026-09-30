#!/bin/sh
# usage: shoot.sh name url WxH [extra flags]
cd "$(dirname "$0")"
/usr/bin/chromium --headless --disable-gpu --hide-scrollbars --virtual-time-budget=6000 --screenshot="$1.png" --window-size="$3" $4 "$2" 2>/dev/null
