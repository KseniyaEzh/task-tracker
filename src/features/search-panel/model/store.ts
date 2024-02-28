import { makeAutoObservable } from "mobx";

class Search {
  searchValue = '';

  constructor() {
    makeAutoObservable(this);
  }

  setSearchValue = (value: string) => {
    this.searchValue = value;
  };
}

const searchStore = new Search();

export { searchStore };