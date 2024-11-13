import { Statuses } from 'features/statuses';

import { ImageButton } from 'shared/ui';

import img from 'shared/assets/253.jpeg';

import styles from './styles.module.scss';

interface TaskCardProps {
  idx: number,
  label?: string,
  description?: string,
  team?: {
    id: number,
    img: string,
  }[],
  onDragStart(e: any, index: number): void,
  onDragOver(e: any, index: number): void,
}

const TaskCard = ({
  idx,
  label = 'Code style',
  description = 'Write documentation about the code style, as well as convert all pages to the new code style.',
  team = [{ id: 1, img: img }],
  onDragStart,
  onDragOver,
}: TaskCardProps) => {
  const handleToAccount = () => {};

  const renderTeamPeople = () => team.map((person, idx) => (
    <ImageButton
      key={ idx }
      img={ person.img }
      width='30px'
      onClick={ handleToAccount }
    />
  ));
  

  // const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
  //   // You can set data to be transferred during the drag operation here
  //   // For example, the ID of the task card if you have one
  //   // event.dataTransfer.setData("text/plain", taskId);
  //   console.log('event', event);
  //   return null;
  // };
  console.log('idx', idx);

  return (
    <div
      id='card'
      className={ styles.wrapper }
      draggable
      onDragStart={ (e) => onDragStart(e, idx) }
      onDragOver={ (e) => onDragOver(e, idx) }
    >
      <Statuses statusCode={ 0 } />
      <div className={ styles.label }>
        { label }
      </div>
      <div className={ styles.description }>
        { description }
      </div>
      { renderTeamPeople() }
    </div>
  );
};

export { TaskCard };
