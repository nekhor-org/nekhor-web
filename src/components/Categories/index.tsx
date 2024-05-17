import { Link } from '@modern-js/runtime/router';
import 'slick-carousel/slick/slick.css';
import { useModel } from '@modern-js/runtime/model';
import styles from './style.module.css';
import { categoryDictionary } from '@/utils/options';
import uiModel from '@/models/ui';

export default function Categories() {
  const [state] = useModel(uiModel);
  const keys: any = state.navigation ? Object.keys(state.navigation) : null;
  return (
    <section className={styles.categories}>
      {keys ??
        keys
          .filter((item: any) => item !== 'INTRO')
          .map((item: any) => (
            <section key={item} className="flex flex-col py-4">
              <header className="flex items-center justify-between">
                <h3 className="title-default text-4xl font-default line-clamp-2 pb-2">
                  {
                    // @ts-expect-error
                    categoryDictionary[item]
                  }
                </h3>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-primary hover:underline"
                >
                  View all
                </Link>
              </header>
              <div className="flex items-center gap-2 md:gap-8 mt-6 overflow-x-auto md:overflow-x-hidden lg:overflow-visible">
                {state.navigation[item]?.slice(0, 3)?.map((el: any) => (
                  <div
                    key={el.id}
                    className="flex min-w-[220px] flex-col items-center"
                  >
                    <Link
                      to={el.link}
                      className="relative w-full hover:opacity-75 transition-all hover:-mt-4 group"
                    >
                      <img
                        src={el.image}
                        alt={el.title}
                        width="100%"
                        className="rounded-xl"
                      />
                      <div className="absolute left-0 bottom-0 bg-gradient-to-t from-black to-transparent w-full h-1/2 rounded-xl"></div>
                      <div className="absolute group-hover:bottom-2 transition-all left-0 bottom-0 z-10 p-3 text-white flex flex-col">
                        <span className="text-xs opacity-75 uppercase">
                          {
                            // @ts-expect-error
                            categoryDictionary[item]
                          }
                        </span>
                        <span className="text-2xl font-default">
                          {el.title}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          ))}
    </section>
  );
}
