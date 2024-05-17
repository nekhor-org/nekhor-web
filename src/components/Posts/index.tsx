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
        <div className="w-full mx-auto mt-6 grid max-w-2xl auto-rows-fr grid-cols-1 md:grid-cols-2 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {list.map((el: any) => (
            <Link
              key={el.id}
              to={`${link}/${slugify(el.title)}/${el.post_id}`}
              className="relative isolate flex flex-col hover:opacity-75 transition-all justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={`${process.env.API_BASE_URL}${el.image}`}
                alt={el.title}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <span className="mr-8 uppercase opacity-85">{el.local}</span>
              </div>
              <h3 className="mt-3 text-3xl leading-8 font-normal font-default leading-6 text-white">
                <span className="absolute inset-0" />
                {capitalizeString(el.title)}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
