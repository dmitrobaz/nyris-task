import React, { SetStateAction } from 'react';

export interface IItems {
  oid: string;
  title: string;
  categories: string[];
  images: string[];
  ids: {
    iD_BaaN: string;
  };
}

export interface IItemsStore {
  items: {
    data: IItems[];
  };
}

export interface ISearchStore {
  search: {
    value: string;
  };
}

export interface IFooter {
  config: {
    oid: string;
    title: string;
    categories: string[];
    images: string[];
    ids: {
      iD_BaaN: string;
    };
  }[];
}

export interface IHeader {
  searchValue: string;
  setSearchValue: React.Dispatch<SetStateAction<string>>;
}
