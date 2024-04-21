import { persistCategory } from 'api/helper';
import React, { useState } from 'react';
import { CategoryType, SetStateType } from 'types';
import { AddFilterItem } from 'views/AddFilterItem.view';
import { FilterItem } from 'views/FilterItem.view';

export const AddFilterContainer: React.FC<{
  categories: CategoryType[];
  setCategories: SetStateType<CategoryType>;
}> = ({ categories, setCategories }) => {
  const [showAddFilter, setShowAddFilter] = useState<boolean>(false);
  const [newFilter, setNewFilter] = useState<string>('');

  const handleAddFilter = (str: string) => {
    if (str === 'Enter') {
      setCategories([...categories, { label: newFilter, color: 'pink' }]);
      setShowAddFilter(false);
      setNewFilter('');
      persistCategory({ label: newFilter, color: 'pink' });
    } else if (str === 'Escape') {
      setShowAddFilter(false);
      setNewFilter('');
    }
  };

  const onAddFilterChange = (str: string) => {
    setNewFilter(str);
  };

  return (
    <>
      {showAddFilter && (
        <AddFilterItem value={newFilter} handler={handleAddFilter} onChange={onAddFilterChange} />
      )}

      <FilterItem
        label="Add filter"
        className="light-grey"
        addFilter
        clickHandler={() => setShowAddFilter(true)}
      />
    </>
  );
};
