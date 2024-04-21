import React from 'react';
import List from '@mui/material/List';
import { SidebarListButton } from 'views/SidebarListButton.view';
import { FilterItem } from 'views/FilterItem.view';
import { ListIcons } from 'views/SidebarListIcon.view';
import { CategoryType, SetStateType, SetStateTypeSingle } from 'types';
import { AddFilterContainer } from './AddFilter.container';

export const SidePanelListContainer: React.FC<{
  setShowDoneTasks: SetStateTypeSingle<boolean>;
  categories: CategoryType[];
  setCategories: SetStateType<CategoryType>;
  filter: string | null;
  setFilter: SetStateTypeSingle<string | null>;
  setShowHelp: SetStateTypeSingle<boolean>;
}> = ({ setShowDoneTasks, categories, setCategories, filter, setFilter, setShowHelp }) => {
  const filterHandler = (label: string) => {
    if (label) {
      if (label === filter) {
        setFilter(null);
      } else {
        setFilter(label);
      }
    } else {
      setFilter(null);
    }
  };

  return (
    <List>
      <SidebarListButton
        label="To-Do Tasks"
        className="light-grey"
        icon={ListIcons.EventIcon}
        mt={2}
        onClick={() => setShowDoneTasks(false)}
      />

      {categories.map((category) => (
        <FilterItem
          key={category.label}
          label={category.label}
          className={category.color}
          clickHandler={() => filterHandler(category.label)}
          selected={category.label === filter}
        />
      ))}

      <AddFilterContainer categories={categories} setCategories={setCategories} />

      <SidebarListButton
        label="Finished tasks"
        className="light-grey"
        icon={ListIcons.FinishedTasks}
        mt={2}
        onClick={() => setShowDoneTasks(true)}
      />

      <SidebarListButton
        label="Help"
        className="light-grey"
        icon={ListIcons.HelpIcon}
        mt={2}
        onClick={() => setShowHelp(true)}
      />
    </List>
  );
};
