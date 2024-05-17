import { Drawer } from 'vaul';
import { useModel } from '@modern-js/runtime/model';
import uiModel from '@/models/ui';

import Subscribe from '@/components/Subscribe';
import NavigationList from '@/components/Navigation/list';
import Share from '@/components/Share';

export default function DrawerMenu({ children }: any) {
  const [state, actions] = useModel(uiModel);

  const onClose = () => {
    actions.setMenuDrawer({
      visible: false,
      type: '',
    });
  };

  return (
    <Drawer.Root
      open={state.menuDrawer.visible}
      modal={state.menuDrawer.visible}
      onClose={onClose}
    >
      {children}
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-5" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium font-default text-2xl text-center mb-4">
                {state.menuDrawer.type === 'menu' && 'Navigation'}
                {state.menuDrawer.type === 'config' && 'Configuration'}
                {state.menuDrawer.type === 'subscribe' && 'Subscribe'}
                {state.menuDrawer.type === 'share' && 'Share'}
              </Drawer.Title>
              {state.menuDrawer.type === 'menu' && <NavigationList />}
              {state.menuDrawer.type === 'subscribe' && <Subscribe />}
              {state.menuDrawer.type === 'share' && <Share />}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
