#!/usr/bin/env node

const text = require('fs').readFileSync('./res.txt', 'utf8');
const blocks = text.split(/\n(?=Lundi|Mardi|Mercredi|Jeudi|Vendredi|..Intendant)/gi).slice(1,-1);

console.log(JSON.stringify(blocks.map(block => block.replace(/\s*\n\s*/g, '\n'))
    .map(block => ({
        title: block.split('\n')[0],
        content: block.split('\n').slice(1).join('\n')
    }))));
