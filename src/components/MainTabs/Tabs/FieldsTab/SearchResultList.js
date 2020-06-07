import React from 'react';
import { fieldTypes } from '../../../../constants/constants';

const SearchResultList = (props) => {
  const getSearchResult = (param) => {
    let searchResult = []
    Object.values(fieldTypes).map(list => {
      Object.keys(list).map(item => {
        if (list[item].includes(param)) searchResult.push({ type: item, title: list[item] })
      })
    })

    return searchResult;
  }

  const listItems = getSearchResult(props.searchParam);

  return (
    <div className="search_result">
      {
        listItems.map((item, index) =>
          <button type="button" className="btn_field" onClick={() => props.onSelectField(item.type)} key={index}>{item.title}</button>
        )
      }
    </div>
  )
}

export default SearchResultList;