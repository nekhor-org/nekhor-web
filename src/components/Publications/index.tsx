import { Link } from '@modern-js/runtime/router';
import styles from './style.module.css';

export default function Publications({ list }: any) {
  return (
    <section className={styles.categories}>
      <header className="flex items-center justify-between border-gray-200 border-t pt-12">
        <h3 className="title-default text-4xl font-default">
          Our Publications
        </h3>
        <Link
          to={`/publications`}
          title="View all publications"
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
      <div className="flex items-center gap-8 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6 overflow-x-auto md:overflow-x-hidden">
        {list?.slice(0, 3)?.map((item: any) => (
          <Link
            to={`/publications/${item.slug}`}
            key={item.id}
            title={item.title}
            className="flex gap-3 items-center transition-all hover:opacity-50"
          >
            <img
              src={item.image}
              className="max-w-[240px] w-full rounded-lg"
              alt={item.title}
            />
            <div className="flex flex-col px-4">
              <span className="text-xs mb-2 text-gray-500">{item.date}</span>
              <h4 className="line-clamp-3 font-default text-3xl leading-8">
                {item.title}
              </h4>
              <p className="line-clamp-4 text-sm text-gray-500 mt-2">
                {item.read}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
