/* eslint-disable react/no-danger */
import { useModel } from '@modern-js/runtime/model';
import { Link, useLoaderData } from '@modern-js/runtime/router';
import { useEffect, useState } from 'react';
import { Helmet } from '@modern-js/runtime/head';
import uiModel from '@/models/ui';

const Publications = () => {
  const { publications, about } = useLoaderData() as any;
  const [state] = useModel(uiModel);
  const [aboutItem, setAboutItem] = useState<any>(null);
  const [publicationsList, setPublicationsList] = useState<any>(null);

  useEffect(() => {
    if (about?.data) {
      setAboutItem({
        ...about?.data,
      });
    }
    if (!about?.data && state?.about?.data?.length) {
      setAboutItem({
        ...state?.about?.data[0],
      });
    }
  }, [state, about]);

  useEffect(() => {
    if (publications?.data) {
      setPublicationsList([publications?.data]);
    }
    if (!about?.data && state.meta?.publications?.data?.length) {
      setPublicationsList([state.meta?.publications?.data]);
    }
  }, [state, publications]);

  return (
    <>
      <Helmet>
        <title>Publications — Nekhor</title>
        <link
          rel="canonical"
          href={`${process.env.APP_BASE_URL}/publications`}
        />
        <meta property="og:site_name" content="Nekhor" />
        <meta property="og:title" content="Publications — Nekhor" />
        <meta
          property="og:url"
          content={`${process.env.APP_BASE_URL}/publications`}
        />
        <meta property="og:type" content="website" />
        <meta itemProp="name" content="Publications — Nekhor" />
        <meta
          itemProp="url"
          content={`${process.env.APP_BASE_URL}/publications`}
        />
        <meta name="twitter:title" content="Publications — Nekhor" />
        <meta
          name="twitter:url"
          content={`${process.env.APP_BASE_URL}/publications`}
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <div className="container mx-auto divide-y divide-gray-150 py-10 w-full max-w-[1100px] px-8 md:px-0">
        <h3 className="text-6xl text-secondary pb-8 text-center w-full font-default">
          Our publications
        </h3>
        <div
          className="pb-8 mb-8 flex w-full pt-4"
          dangerouslySetInnerHTML={{ __html: aboutItem?.our_publications }}
        />
        {publicationsList?.map((item: any) => (
          <section key={item.id} className="post w-full inline-flex py-8">
            <div className="w-full">
              <small className="text-gray-400 text-sm">{item.date}</small>
              <Link to={`/publications/${item.slug}`} title={item.title}>
                <h1 className="text-5xl text-black font-default text-left w-full my-4">
                  {item.title}
                </h1>
              </Link>
              <p className="text-gray-600 my-4">{item.read}</p>
              <Link
                to={`/publications/${item.slug}`}
                title={item.title}
                className="text-primary text-lg hover:underline"
              >
                Read more →
              </Link>
            </div>
            <span className="pl-10">
              <Link
                to={`/publications/${item.slug}`}
                title={`Read ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width="320"
                  height="auto"
                  className=" max-h-[400px] rounded-xl overflow-hidden"
                />
              </Link>
            </span>
          </section>
        ))}
        <div className="w-full relative mb-8 pt-8 mt-8 border-t border-gray-100">
          <h3 className="text-6xl mb-8 pb-4 text-secondary lg:text-6xl text-black font-default text-center w-full mt-4">
            Our translations
          </h3>
          <div
            className="editor-html"
            dangerouslySetInnerHTML={{ __html: aboutItem?.our_translations }}
          />
        </div>
      </div>
    </>
  );
};

export default Publications;
