import React from 'react';
import SummarizeIcon from '@mui/icons-material/Summarize';
import CachedIcon from '@mui/icons-material/Cached';

import { ColumnTask } from 'features/column-tasks';

import img from 'shared/assets/253.jpeg';

import styles from './styles.module.scss';

const mockDataTasks = [
  {  
    label: 'asdas',
    description: 'fgdfdbfd1',
    team: [{ id: 1, img: img }],
  },
  {  
    label: 'asdas',
    description: 'fgdfdbfd2',
    team: [{ id: 1, img: img }],
  }
];

const mockDataColumns = [
  {
    title: 'To do',
    icon: <SummarizeIcon sx={{ fontSize: 30 }} />,
    listTasks: mockDataTasks,
  },
  {
    title: 'In progress',
    icon: <CachedIcon sx={{ fontSize: 30 }} />,
    listTasks: mockDataTasks,
  }
];

const AllColumnsTasks = () => {
  const renderAllColumns = () => mockDataColumns.map(({ title, icon, listTasks }) => (
    <ColumnTask
      title={ title }
      icon={ icon }
      listTasks={ listTasks }
    />
  ));

  return (
    <div className={ styles.wrapper }>
      { renderAllColumns() }
    </div>
  );
};

export { AllColumnsTasks };
