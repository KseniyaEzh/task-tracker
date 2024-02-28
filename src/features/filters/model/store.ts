import { makeAutoObservable } from "mobx";

import { IFilters } from 'features/filters';

class Filters {
  filtersList: IFilters = [];

  constructor() {
    makeAutoObservable(this);
  }

  getFilters = () => {
    const filters = [
      {
        id: 0,
        name: 'Mine'
      },
      {
        id: 1,
        name: 'Closed'
      }
    ];

    this.filtersList = filters;
  };
}

const filtersStore = new Filters();

export { filtersStore };
