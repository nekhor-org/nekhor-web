import { Link } from '@modern-js/runtime/router';
import { Shimmer } from 'react-shimmer';
import { useEffect, useState } from 'react';
import * as S from './styled';
import { ItemProps } from '@/models/ui';
import { capitalizeString } from '@/utils/string';

export interface NavigationProps {
  current: ItemProps;
  list: ItemProps[];
  type: string;
}

export default function Navigation({ current, list, type }: NavigationProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (list?.length) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [list]);

  return (
    <S.Navigation className="border-r border-gray-200">
      <strong className="font-default text-lg font-normal my-4 text-primary">
        {type}
      </strong>
      <S.NavigationList>
        {isLoading ? (
          <div className="flex flex-col gap-2">
            <div className="shimmer-container flex overflow-hidden">
              <Shimmer width={90} height={14} />
            </div>
            <div className="shimmer-container flex overflow-hidden">
              <Shimmer width={120} height={14} />
            </div>
            <div className="shimmer-container flex overflow-hidden">
              <Shimmer width={45} height={14} />
            </div>
            <div className="shimmer-container flex overflow-hidden">
              <Shimmer width={77} height={14} />
            </div>
            <div className="shimmer-container flex overflow-hidden">
              <Shimmer width={48} height={14} />
            </div>
            <div className="shimmer-container flex overflow-hidden">
              <Shimmer width={98} height={14} />
            </div>
          </div>
        ) : (
          list?.map(item => (
            <S.NavigationItem
              key={item.title}
              active={current?.link === item.link}
            >
              <Link to={item.link} title={item.title}>
                {capitalizeString(item.title)}
              </Link>
            </S.NavigationItem>
          ))
        )}
      </S.NavigationList>
    </S.Navigation>
  );
}
