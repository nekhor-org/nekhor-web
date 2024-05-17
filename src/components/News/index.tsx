import { Link } from '@modern-js/runtime/router';
import styles from './style.module.css';

export default function News({ list }: any) {
  return (
    <section className={styles.categories}>
      <header className="flex items-center justify-between border-gray-200 border-t pt-12">
        <h3 className="title-default text-4xl font-default">Our news</h3>
        <Link
          to={`/news`}
          title="View all news"
          className="text-primary hover:underline flex items-center"
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
      <ul
        role="list"
        className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-left sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-4"
      >
        {list?.slice(0, 4)?.map((item: any) => (
          <li key={item.name}>
            <Link
              to={`/news/${item.slug}`}
              key={item.id}
              title={item.title}
              className="flex gap-3 hover:opacity-75 items-start flex-col transition-all hover:opacity-50"
            >
              <figure className="relative max-h-auto lg:max-h-[200px] overflow-hidden rounded-lg mx-auto">
                <img
                  className="mx-auto rounded-lg object-cover"
                  src={item?.image}
                  alt={item?.title}
                />
              </figure>
              <h3 className="mt-2 text-2xl font-default font-medium leading-7 tracking-tight text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-slate-600">{item.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
