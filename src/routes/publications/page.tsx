/* eslint-disable react/no-danger */
import { useModel } from '@modern-js/runtime/model';
import { Link, useLoaderData } from '@modern-js/runtime/router';
import { useEffect, useState } from 'react';
import { Helmet } from '@modern-js/runtime/head';
import uiModel from '@/models/ui';
import { Await } from '@modern-js/runtime/router';
import { Suspense } from 'react';
import { Shimmer } from 'react-shimmer';

const Publications = () => {
  const [state] = useModel(uiModel);
  const [aboutItem, setAboutItem] = useState<any>(null);
  const [publicationsList, setPublicationsList] = useState<any>(null);
  const { publications, about } = useLoaderData() as {
    publications: {
      data: any;
      status: number;
    };
    about: {
      data: any;
      status: number;
    };
  };

  const ssrPublicationsData = publications?.data;
  const ssrAboutData = about?.data;

  const publicationsPromise = new Promise<any>(resolve => {
    setTimeout(() => {
      resolve(ssrPublicationsData);
    }, 100);
  });

  const aboutPromise = new Promise<any>(resolve => {
    setTimeout(() => {
      resolve(ssrAboutData);
    }, 100);
  });

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
    if (aboutPromise) {
      setPublicationsList([aboutPromise]);
    }
    if (!about?.data && state.meta?.aboutPromise?.length) {
      setPublicationsList([state.meta?.aboutPromise]);
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
        <Suspense
          fallback={
            <div className="flex flex-col w-full">
              <Shimmer width={620} height={16} />
              <Shimmer width={440} height={16} />
            </div>
          }
        >
          <Await resolve={aboutPromise}>
            <div
              className="pb-8 mb-8 flex w-full pt-4"
              dangerouslySetInnerHTML={{ __html: aboutItem?.our_publications }}
            />
          </Await>
        </Suspense>
        <Suspense
          fallback={
            <div className="flex flex-col flex gap-10 flex-col py-8">
              <div className="post w-full gap-4">
                <Shimmer width={70} height={14} />
                <Shimmer className="w-full my-4" width={490} height={46} />
                <div className="flex flex-col gap-2">
                  <Shimmer width={620} height={16} />
                  <Shimmer width={440} height={16} />
                </div>
              </div>
              <div className="post w-full gap-4">
                <Shimmer width={70} height={14} />
                <Shimmer className="w-full my-4" width={590} height={46} />
                <div className="flex flex-col gap-2">
                  <Shimmer width={720} height={16} />
                  <Shimmer width={420} height={16} />
                </div>
              </div>
              <div className="post w-full gap-4">
                <Shimmer width={56} height={14} />
                <Shimmer className="w-full my-4" width={790} height={46} />
                <div className="flex flex-col gap-2">
                  <Shimmer width={420} height={16} />
                  <Shimmer width={440} height={16} />
                </div>
              </div>
              <div className="post w-full gap-4">
                <Shimmer width={64} height={14} />
                <Shimmer className="w-full my-4" width={320} height={46} />
                <div className="flex flex-col gap-2">
                  <Shimmer width={520} height={16} />
                  <Shimmer width={240} height={16} />
                </div>
              </div>
              <div className="post w-full gap-4">
                <Shimmer width={70} height={14} />
                <Shimmer className="w-full my-4" width={490} height={46} />
                <div className="flex flex-col gap-2">
                  <Shimmer width={420} height={16} />
                  <Shimmer width={540} height={16} />
                </div>
              </div>
            </div>
          }
        >
          <Await resolve={publicationsPromise}>
            {(data: any) => {
              return data?.map((item: any) => (
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
              ));
            }}
          </Await>
        </Suspense>

        <div className="w-full relative mb-8 pt-8 mt-8 border-t border-gray-100">
          <h3 className="text-6xl mb-8 pb-4 text-secondary lg:text-6xl text-black font-default text-center w-full mt-4">
            Our translations
          </h3>
          <Suspense
            fallback={
              <div className="flex flex-col w-full">
                <Shimmer width={620} height={16} />
                <Shimmer width={440} height={16} />
              </div>
            }
          >
            <Await resolve={aboutPromise}>
              <div
                className="editor-html"
                dangerouslySetInnerHTML={{
                  __html: aboutItem?.our_translations,
                }}
              />
            </Await>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Publications;
