#!/usr/bin/env fish

set path (curl 'http://www.lyceecolbert-tg.org/menu-vivre/restauration-scolaire.html' ^/dev/null | grep -Poi '<p.+?img.+?/>' | grep -Po '".+?"' | tail -n 1 | string trim -c '"')
set url "http://www.lyceecolbert-tg.org/$path"
wget $url -O menu.jpg

tesseract menu.jpg res -l fra+osd
sed -i -f replacements.sed res.txt

set timespan ''
