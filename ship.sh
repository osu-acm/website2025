#!/bin/bash

rsync -r build/ flip:/nfs/farm/groups/acm/public_html/
ssh flip "chmod -R 755 /nfs/farm/groups/acm/public_html"
