import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';
import { changeFilter } from '../../redux/contacts/operations';
import css from './filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
  
  const handleFilterChange = (event) => {
    const { value } = event.target;
    dispatch(changeFilter(value));
  };

  return (
    <div>
      <label className={css.filterLabel} htmlFor="filterInput">
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        id="filterInput"
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  )
}