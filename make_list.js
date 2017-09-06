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
      'Hugo',
      'Conor',
      'Sugu',
      'Andrea',
      'Sebastiano',
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
bList.generateList('2017-09-07T12:00:00Z', 'Alejo');

console.log(`var dates = JSON.parse('${JSON.stringify(bList.list)}')`);