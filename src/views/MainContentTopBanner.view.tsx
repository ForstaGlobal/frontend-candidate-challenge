import React from 'react';
import Typography from '@mui/material/Typography';
import { TaskType } from 'types';
import { TestID } from 'testID';

export const MainContentTopBanner: React.FC<{ focusedTask?: TaskType }> = ({ focusedTask }) => (
  <>
    <Typography variant="h5" className="white">
      Today main foucs
    </Typography>
    <Typography
      variant="h3"
      className="white"
      mt={1}
      fontWeight="bold"
      data-testid={TestID.MainContentTopBannerFocusedTask}
    >
      {focusedTask && focusedTask.text}
    </Typography>
  </>
);
