import { Link } from '@modern-js/runtime/router';
import logo from '@/assets/logo.png';
import googlePlay from '@/assets/download-googleplay.png';
import appStore from '@/assets/download-appstore.png';

export default function Footer() {
  return (
    <div className="relative w-full py-8 px-8 lg:px-24 lg:py-28 bg-white border-t border-neutral-200 dark:border-neutral-200">
      <div className="container w-full mx-auto max-w-[1240px]">
        <div className="flex flex-col xl:grid xl:grid-cols-4 gap-5">
          <div className="flex items-start justify-start ml-0">
            <img
              src={logo}
              alt="Logo Nekhor"
              height="42"
              className="max-h-[42px]"
            />
          </div>
          <div className="flex xl:ml-20">
            <div className="text-sm">
              <h5 className="font-semibold font-default text-lg">
                Getting started
              </h5>
              <ul className="mt-5 space-y-4">
                <li>
                  <Link
                    className="text-gray-900 hover:text-gray-800 hover:underline"
                    to="/introduction"
                    title="Introduction"
                  >
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-900 hover:text-gray-800 hover:underline"
                    to="/buddha"
                    title="The Buddha"
                  >
                    The Buddha
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-900 hover:text-gray-800 hover:underline"
                    to="/guru"
                    title="The Guru"
                  >
                    The Guru
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex xl:ml-20">
            <div className="text-sm">
              <h5 className="font-semibold font-default text-lg">Explore</h5>
              <ul className="mt-5 space-y-4">
                <li>
                  <Link
                    className="text-gray-900 hover:text-gray-800 hover:underline"
                    to="/publications"
                    title="Publications"
                  >
                    Publications
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-900 hover:text-gray-800 hover:underline"
                    to="/news"
                    title="News"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-900 hover:text-gray-800 hover:underline"
                    to="/about-us"
                    title="About Us"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:max-w-[180px] w-full flex flex-col">
            <strong className="text-gray-900 font-semibold font-default text-lg">
              Download Apps
            </strong>
            <div className="flex flex-col w-full gap-4 mt-4">
              <button
                type="button"
                onClick={() => {
                  window.open(
                    'https://play.google.com/store/apps/details?gl=US&amp;hl=en&amp;id=com.cavernalabs.nekhor',
                    '_blank',
                  );
                }}
              >
                <img
                  src={googlePlay}
                  height="46"
                  className="max-h-[72px] md:max-h-[46px]"
                  alt="Google Play"
                />
              </button>
              <button
                type="button"
                onClick={() => {
                  window.open(
                    'https://apps.apple.com/us/app/nekhor/id1495713473',
                    '_blank',
                  );
                }}
              >
                <img
                  src={appStore}
                  height="42"
                  className="max-h-[72px] md:max-h-[42px]"
                  alt="App Store"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
