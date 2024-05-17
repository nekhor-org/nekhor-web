import { Link } from '@modern-js/runtime/router';
import { useModel } from '@modern-js/runtime/model';
import { Menu, Transition } from '@headlessui/react';
import uiModel from '@/models/ui';

import Icon from '@/components/Icon';
import { capitalizeString, slugify } from '@/utils/string';

export default function NavigationList() {
  const [state, actions] = useModel(uiModel);

  const onClose = () => {
    actions.setMenuDrawer({
      visible: false,
      type: '',
    });
  };

  return (
    <nav className="nav flex flex-col gap-4 text-gray-900">
      <div className="relative flex flex-col">
        <Menu>
          <Menu.Button>
            <div className="flex items-center gap-2 relative hover:underline hover:cursor-default">
              Intro
              <Icon name="ChevronDown" size="14px" />
            </div>
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div className="z-10 relative top-0 focus:border-0 bg-white py-4 border-transparent shadow-none">
              <Menu.Items className="">
                {state?.meta?.posts?.data?.Introduction?.map((item: any) => (
                  <Menu.Item key={item.d}>
                    <Link
                      to={`/guru/${slugify(item.title)}/${item.post_id}`}
                      title={capitalizeString(item.title)}
                      className="w-full flex p-2 whitespace-nowrap text-gray-600 text-sm hover:underline"
                      onClick={() => onClose()}
                    >
                      {capitalizeString(item.title)}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </div>
          </Transition>
        </Menu>
      </div>
      <div className="relative flex flex-col">
        <Menu>
          <Menu.Button>
            <div className="flex items-center gap-2 relative hover:underline hover:cursor-default">
              The Buddha
              <Icon name="ChevronDown" size="14px" />
            </div>
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div className="z-10 relative top-0 focus:border-0 bg-white py-4 border-transparent shadow-none">
              <Menu.Items className="">
                {state?.meta?.posts?.data['The Buddha']?.map((item: any) => (
                  <Menu.Item key={item?.id}>
                    <Link
                      to={`/buddha/${slugify(item.title)}/${item.post_id}`}
                      title={capitalizeString(item.title)}
                      className="w-full flex p-2 whitespace-nowrap text-gray-600 text-sm hover:underline"
                      onClick={() => onClose()}
                    >
                      {capitalizeString(item.title)}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </div>
          </Transition>
        </Menu>
      </div>
      <div className="relative flex flex-col">
        <Menu>
          <Menu.Button>
            <div className="flex items-center gap-2 relative hover:underline hover:cursor-default">
              The Guru
              <Icon name="ChevronDown" size="14px" />
            </div>
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div className="z-10 relative top-0 focus:border-0 bg-white py-4 border-transparent shadow-none">
              <Menu.Items className="">
                {state?.meta?.posts?.data?.Guru?.map((item: any) => (
                  <Menu.Item key={item?.id}>
                    <Link
                      to={`/guru/${slugify(item.title)}/${item.post_id}`}
                      title={capitalizeString(item.title)}
                      className="w-full flex p-2 whitespace-nowrap text-gray-600 text-sm hover:underline"
                      onClick={() => onClose()}
                    >
                      {capitalizeString(item.title)}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </div>
          </Transition>
        </Menu>
      </div>
      <span className="my-2 bg-gray-200 h-[1px] w-full flex" />
      <Link
        to="/news"
        title="News"
        className="hover:underline"
        onClick={() => onClose()}
      >
        News
      </Link>
      <Link
        to="/publications"
        className="hover:underline"
        title="Publications"
        onClick={() => onClose()}
      >
        Publications
      </Link>
      <Link
        to="/about-us"
        className="hover:underline"
        title="About Us"
        onClick={() => onClose()}
      >
        About Us
      </Link>
    </nav>
  );
}
