import { ItemProps } from '@/models/ui';

export interface NavigationProps {
  current: ItemProps;
  list: ItemProps[];
  type: string;
}
