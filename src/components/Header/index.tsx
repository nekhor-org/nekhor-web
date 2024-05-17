/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { Drawer } from 'vaul';
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
} from '@modern-js/runtime/router';
import { Menu, Transition } from '@headlessui/react';
import { useModel } from '@modern-js/runtime/model';

import * as S from './styled';

import Icon from '@/components/Icon';
import logo from '@/assets/logo.png';
import icon from '@/assets/favicon.png';
import uiModel from '@/models/ui';
import { capitalizeString, slugify } from '@/utils/string';

export default function Header() {
  const [state, actions] = useModel(uiModel);
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const [hasInner, setHasInnerPage] = useState(false);

  const splitRoute = location?.pathname?.split('/')[1];
  const titleInner = params.id
    ? splitRoute?.charAt(0).toUpperCase() + splitRoute?.substring(1, 99)
    : '';

  const handleSubscribe = () => {
    actions.setMenuDrawer({
      visible: true,
      type: 'subscribe',
    });
  };

  useEffect(() => {
    setHasInnerPage(location?.pathname?.split('/')?.length > 2);
  }, [location]);

  return (
    <S.Header className="backdrop-blur-sm bg-white/75">
      <div className="start flex items-center">
        {hasInner ? (
          <button
            className="button-back transition-all hover:bg-gray-100 mr-2"
            onClick={() => {
              if (window.history.length > 2) {
                window.history.back();
              } else {
                navigate('/');
              }
            }}
          >
            <Icon name="ArrowLeft" size="24px" color="#A67C00" />
          </button>
        ) : undefined}
        <a href="/" title="Homepage">
          {!hasInner ? (
            <img
              src={logo}
              height="52"
              alt="Logo Nekhor"
              className="max-h-[42px] lg:max-h-[52px]"
            />
          ) : (
            <img
              src={icon}
              height="52"
              alt="Icon Nekhor"
              className="max-h-[42px] lg:max-h-[52px]"
            />
          )}
        </a>
        {hasInner ? (
          <Link to={`/${titleInner?.toLowerCase()}`} title={titleInner}>
            <h2 className="font-default text-xl py-2 md:text-3xl ml-4 whitespace-nowrap truncate">
              {titleInner}
            </h2>
          </Link>
        ) : undefined}
      </div>
      <div className="end">
        <nav className="nav hidden xl:flex items-center gap-1 text-gray-900">
          <div
            className={`relative flex flex-col py-2 px-2 rounded-lg ${
              splitRoute?.includes('intro') ? 'bg-gray-100 text-primary' : ''
            }`}
          >
            <Menu>
              <Menu.Button>
                <div className="flex items-center group gap-2 relative hover:opacity-50 hover:cursor-default">
                  Intro
                  <span className="group-hover:rotate-180 transition-all">
                    <Icon name="ChevronDown" size="14px" />
                  </span>
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
                <div className="z-10 absolute top-6 focus:border-0 backdrop-blur-sm bg-white/95 p-4 rounded-lg shadow-lg border border-gray-200">
                  <Menu.Items className="min-w-[200px] max-w-[300px] max-h-[325px] overflow-y-auto">
                    {state?.meta?.posts?.data?.Introduction?.map(
                      (item: any, index: number) => (
                        <Menu.Item key={index}>
                          <Link
                            to={`/introduction/${slugify(item.title)}/${
                              item.post_id
                            }`}
                            title={capitalizeString(item.title)}
                            className="w-full flex p-2 whitespace-normal text-gray-600 text-sm hover:underline"
                          >
                            {capitalizeString(item.title)}
                          </Link>
                        </Menu.Item>
                      ),
                    )}
                  </Menu.Items>
                </div>
              </Transition>
            </Menu>
          </div>
          <div
            className={`relative flex flex-col py-2 px-2 rounded-lg  ${
              splitRoute?.includes('buddha') ? 'bg-gray-100 text-primary' : ''
            }`}
          >
            <Menu>
              <Menu.Button>
                <div className="flex items-center group gap-2 relative hover:opacity-50 hover:cursor-default">
                  The Buddha
                  <span className="group-hover:rotate-180 transition-all">
                    <Icon name="ChevronDown" size="14px" />
                  </span>
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
                <div className="z-10 absolute top-6 focus:border-0 backdrop-blur-sm bg-white/95 p-4 rounded-lg shadow-lg border border-gray-200">
                  <Menu.Items className="min-w-[200px] max-w-[300px] max-h-[325px] overflow-y-auto">
                    {state?.meta?.posts?.data['The Buddha']?.map(
                      (item: any, index: number) => (
                        <Menu.Item key={index}>
                          <Link
                            to={`/buddha/${slugify(item.title)}/${
                              item.post_id
                            }`}
                            title={capitalizeString(item.title)}
                            className="w-full flex p-2 whitespace-normal text-gray-600 text-sm hover:underline"
                          >
                            {capitalizeString(item.title)}
                          </Link>
                        </Menu.Item>
                      ),
                    )}
                  </Menu.Items>
                </div>
              </Transition>
            </Menu>
          </div>
          <div
            className={`relative flex flex-col py-2 px-2 rounded-lg  ${
              splitRoute?.includes('guru') ? 'bg-gray-100 text-primary' : ''
            }`}
          >
            <Menu>
              <Menu.Button>
                <div className="flex items-center group gap-2 relative hover:opacity-50 hover:cursor-default">
                  The Guru
                  <span className="group-hover:rotate-180 transition-all">
                    <Icon name="ChevronDown" size="14px" />
                  </span>
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
                <div className="z-10 absolute top-6 focus:border-0 backdrop-blur-sm bg-white/95 p-4 rounded-lg shadow-lg border border-gray-200">
                  <Menu.Items className="min-w-[200px] max-w-[300px] max-h-[325px] overflow-y-auto">
                    {state?.meta?.posts?.data?.Guru?.map(
                      (item: any, index: number) => (
                        <Menu.Item key={index}>
                          <Link
                            to={`/guru/${slugify(item.title)}/${item.post_id}`}
                            title={capitalizeString(item.title)}
                            className="w-full flex p-2 whitespace-normal text-gray-600 text-sm hover:underline"
                          >
                            {capitalizeString(item.title)}
                          </Link>
                        </Menu.Item>
                      ),
                    )}
                  </Menu.Items>
                </div>
              </Transition>
            </Menu>
          </div>
          <a
            href="/news"
            className={`relative flex flex-col hover:underline py-2 px-2 rounded-lg  ${
              splitRoute?.includes('news') ? 'bg-gray-100 text-primary' : ''
            }`}
          >
            News
          </a>
          <a
            href="/publications"
            className={`relative flex flex-col hover:underline py-2 px-2 rounded-lg  ${
              splitRoute?.includes('publications')
                ? 'bg-gray-100 text-primary'
                : ''
            }`}
          >
            Publications
          </a>
          <a
            href="/about-us"
            className={`relative flex flex-col hover:underline py-2 px-2 rounded-lg  ${
              splitRoute?.includes('about') ? 'bg-gray-100 text-primary' : ''
            }`}
          >
            About Us
          </a>
        </nav>
        <div className="flex items-center group gap-2 md:gap-1 xl:hidden">
          <Drawer.Trigger
            onClick={() =>
              actions.setMenuDrawer({
                visible: true,
                type: 'menu',
              })
            }
          >
            <div className="w-10 h-10 rounded-full hover:bg-gray-50 border-0 flex items-center justify-center">
              <Icon name="Menu" />
            </div>
          </Drawer.Trigger>
        </div>
        <button
          className="hidden ml-2 md:inline-flex rounded-full px-6 text-xs uppercase font-semibold py-2.5 border-primary border hover:opacity-90"
          onClick={handleSubscribe}
        >
          Download App
        </button>
      </div>
    </S.Header>
  );
}
