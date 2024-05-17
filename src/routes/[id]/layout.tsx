import { Outlet, useParams } from '@modern-js/runtime/router';
import { useModel } from '@modern-js/runtime/model';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import uiModel from '@/models/ui';

export default () => {
  const { id, slug, uid } = useParams();
  const [state] = useModel(uiModel);
  const [currentItem, setCurrentItem] = useState<any>(null);
  const navigation = state?.meta?.navigation?.find((el: any) => el?.key === id);

  useEffect(() => {
    if (navigation?.posts?.length) {
      setCurrentItem(
        navigation?.posts?.find(
          (item: any) => item.link === `/${id}/${slug}/${uid}`,
        ),
      );
    }
  }, [state, id, slug]);

  return (
    <div className="container flex mx-auto">
      <Navigation
        current={currentItem}
        list={navigation?.posts}
        type="Sections"
      />
      <Outlet />
    </div>
  );
};
