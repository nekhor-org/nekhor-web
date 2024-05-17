import { Link } from '@modern-js/runtime/router';
import 'slick-carousel/slick/slick.css';
import styles from './style.module.css';
import { capitalizeString, slugify } from '@/utils/string';

export default function Posts({ list, title, link }: any) {
  return (
    <section className={styles.categories}>
      <div className="flex flex-col py-4">
        <header className="flex items-center justify-between">
          <h3 className="title-default text-5xl text-secondary font-default line-clamp-2 pb-2">
            {title}
          </h3>
          <Link
            to={link}
            className="text-primary hover:underline flex items-center gap-1"
          >
            View all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </header>
        <div className="flex flex-col lg:flex-row items-center gap-2 md:gap-8 mt-6 overflow-x-auto md:overflow-x-hidden lg:overflow-visible">
          {list?.map((el: any) => (
            <div
              key={el.id}
              className="flex w-full lg:w-[392px] h-auto lg:h-[235px] overflow-hidden rounded-xl flex-col items-center hover:opacity-75 transition-all lg:hover:-mt-4 lg:my-0 my-2 group"
            >
              <Link
                to={`${link}/${slugify(el.title)}/${el.post_id}`}
                title={el.title}
                className="relative w-full h-full bg-gray-100"
              >
                <img
                  src={`${process.env.API_BASE_URL}${el.image}`}
                  alt={el.title}
                  width="392"
                  height="260"
                  className="rounded-xl object-fit lg:w-[392px] lg:h-[235px] w-full h-full"
                />
                <div className="absolute left-0 bottom-0 bg-gradient-to-t from-black to-transparent w-full h-1/2 rounded-xl"></div>
                <div className="absolute group-hover:bottom-2 transition-all left-0 bottom-0 z-10 p-3 text-white flex flex-col">
                  <span className="text-xs opacity-75 uppercase">
                    {el.local}
                  </span>
                  <span className="text-2xl font-default">
                    {capitalizeString(el.title)}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
