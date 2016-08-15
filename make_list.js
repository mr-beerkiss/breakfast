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
      'Ilesh',
      'Juan',
      'Andrea',
      'Naresh',
      'Bence',
      'Seemi',
      'Darren'
    ];
  }

  generateList(startDate) {

    startDate = moment(startDate || Date.now());

    for ( let weekIdx=0, nameIdx = 0; weekIdx < this.weeks; weekIdx += 1, nameIdx += 1 ) {
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
bList.generateList('20160804');

console.dir(JSON.stringify(bList.list));