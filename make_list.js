#!/usr/bin/env node
'use strict';

const moment = require('moment');

class BreakfastList {
  constructor(config) {
    config = config || {};
    this.weeks = config.weeks || 52;
    this.names = config.names || this.getDefaultNames();
    this.list = [];
  }

  getDefaultNames() {
    return [
      'Alejo',
      'Priyanka',
      'Hugo',
      'Nick',
      //'Ilesh',
      'Juan',
      'Andrea',
      'Naresh',
      'Bence',
      //'Seemi',
      'Darren'
    ];
  }

  generateList(startDate, startName) {

    let startIdx = this.names.indexOf(startName);
    startIdx = startIdx < 0 ? 0 : startIdx;

    startDate = moment(startDate || Date.now());

    for ( let weekIdx=0, nameIdx = startIdx; weekIdx < this.weeks; weekIdx += 1, nameIdx += 1 ) {
      if ( nameIdx === this.names.length ) nameIdx = 0;

      this.list.push({
        name: this.names[nameIdx],
        date: new Date(startDate.toDate())
      });

      startDate.add(1, 'week');
    }
  }
}

const bList = new BreakfastList();
bList.generateList('2016-09-29 12:00:00 BST', 'Bence');

console.dir(JSON.stringify(bList.list));