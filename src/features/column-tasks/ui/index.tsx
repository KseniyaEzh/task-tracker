import React, { ReactNode, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

import { TaskCard } from 'entities/task-card';

import { Button } from 'shared/ui';
import { ITask } from 'shared/types';

import styles from './styles.module.scss';

interface ColumnTaskProps {
  title: string,
  icon?: ReactNode,
  listTasks: ITask[],
}

const ColumnTask = ({
  title,
  icon,
  listTasks,
}: ColumnTaskProps) => {
  const [currentTasks, setCurrentTasks] = useState(listTasks);

  const handleDragStart = (e, columnIndex) => {
    console.log('handleDragStart', e, columnIndex);
    e.dataTransfer.setData('columnIndex', columnIndex);
  };

  const handleDragOver = (e, columnIndex) => {
    e.preventDefault();
    console.log('tuhandleDragOvert', e, columnIndex);
    const dragIndex = e.dataTransfer.getData('columnIndex');
    if (dragIndex !== columnIndex) {
      const newColumns = [...currentTasks];
      const [draggedColumn] = newColumns.splice(dragIndex, 1);
      newColumns.splice(columnIndex, 0, draggedColumn);
      setCurrentTasks(newColumns);
    }
  };

  console.log('currentTasks', currentTasks);

  const handleAddTask = () => {

  };

  const renderTitle = () => (
    <div className={ styles.wrapper_title }>
      <div className={ styles.name_colums }>
        <div>
          { icon }
        </div>
        <div className={ styles.title }>
          { title }
        </div>
        <div className={ styles.count_tasks }>
          ({ listTasks.length })
        </div>
      </div>
      <div>
        <Button onClick={ handleAddTask } height={ '40px' } className={ styles.button_add_task }>
          <AddIcon />
          Add task
        </Button>
      </div>
    </div>
  );

  const renderTasks = () => currentTasks.map(({ label, description, team }, idx) => {
    console.log('renderTasks idx', idx);
    return (
      <TaskCard
        key={ idx }
        idx={ idx }
        label={ label }
        description={ description }
        team={ team }
        onDragStart={ handleDragStart }
        onDragOver={ handleDragOver }
      />
    );
  });

  return (
    <div className={ styles.wrapper }>
      { renderTitle() }
      { renderTasks() }
    </div>
  );
};

export { ColumnTask };
