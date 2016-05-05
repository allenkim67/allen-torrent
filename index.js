'use strict';

const fs = require('fs');
const bencode = require('bencode');

const torrent = bencode.decode(fs.readFileSync('puppy.torrent'));
const trackerUrl = torrent.announce.toString('utf8');

