import * as React from 'react';
import { IProps } from './types';
import Button from '../../components/Button/Button';

const NoFoundView = (handleClick: IProps) => {
  return (
    <div>
      <span>Здесь ничего не найдено. Такой страницы больше нет или указан неправильный адрес.</span>
      <Button onClick={handleClick}>Перейти на главную страницу</Button>
    </div>
  );
};
export default NoFoundView;
