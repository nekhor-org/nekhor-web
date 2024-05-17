import { Link } from '@modern-js/runtime/router';
import styles from './style.module.css';

export default function News({ list }: any) {
  return (
    <section className={styles.categories}>
      <header className="flex items-center justify-between">
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
      <div className="flex items-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 overflow-x-auto md:overflow-x-hidden">
        {list?.slice(0, 4)?.map((item: any) => (
          <Link
            to={`/news/${item.slug}`}
            key={item.id}
            title={item.title}
            className="flex gap-3 items-center flex-col transition-all hover:opacity-50"
          >
            <div className="w-full flex items-center justify-center">
              <img
                src={item?.image}
                width="100%"
                alt={item?.title}
                className="object-cover block mx-h-auto lg:max-h-[185px] w-full rounded-xl overflow-hidden"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs mb-2 text-gray-500">{item.date}</span>
              <h4 className="text-lg line-clamp-4">{item.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
