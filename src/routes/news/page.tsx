import { Helmet } from '@modern-js/runtime/head';
import React, { Suspense } from 'react';
import { Shimmer } from 'react-shimmer';
import { Await, Link, useLoaderData } from '@modern-js/runtime/router';
import type { PostData } from './page.data';

const News = () => {
  const { news } = useLoaderData() as {
    news: {
      data: PostData;
      status: number;
    };
  };

  const ssrData = news?.data;

  const newsPromise = new Promise<PostData>(resolve => {
    setTimeout(() => {
      resolve(ssrData);
    }, 100);
  });

  return (
    <>
      <Helmet>
        <title>News — Nekhor</title>
        <meta
          content="width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=3"
          name="viewport"
        />
        <link rel="canonical" href={`${process.env.APP_BASE_URL}/news`} />
        <meta property="og:site_name" content="Nekhor" />
        <meta property="og:title" content="News — Nekhor" />
        <meta property="og:url" content={`${process.env.APP_BASE_URL}/news`} />
        <meta property="og:type" content="website" />
        <meta itemProp="name" content="News — Nekhor" />
        <meta itemProp="url" content={`${process.env.APP_BASE_URL}/news`} />
        <meta name="twitter:title" content="News — Nekhor" />
        <meta name="twitter:url" content={`${process.env.APP_BASE_URL}/news`} />
        <meta name="twitter:card" content="summary" />
        <meta
          property="keywords"
          content="Nekhor, Lhasey Lotsawa, Buddhis, guru, lotus, born, following footsteps, android, audio, auspiciously, awakened, awakening, began, benefited, bhutan, blessings, bodh, born, bring, buddha, channel, collected, connect, connects, contents, dakini, dalwa, dechen, descent, download, driven, experience, expertise, explore, favorite, follow, following, footsteps, friendly, gaya, goal, ground, guidelines, guru, have, heaven, india, initiative, installment, intro, introduction, iphone, kushinagar, landscape, later, listen, lived, lotus, lumbini, masters, mission, nekhor, nepal, news, offline, online, padmasambhava, path, pilgrimage, practicalities, practiced, previous, print, project, provide, publication, publications, read, release, resources, sacred, samye, seeking, september, series, shakyamuni, singles, sites, spiritual, stories, subscribe, thirty, tibet, translations, treasured, true, unlimited, upcoming, user, version, view, visual, volume, wisdom, world, years, youtube"
        />
      </Helmet>

      <div className="container mx-auto divide-y divide-gray-150 w-full max-w-[1100px] py-10 px-8 md:px-0">
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
          <Await resolve={newsPromise}>
            {(data: any) => {
              return data?.map((item: any) => (
                <section
                  key={item.title}
                  className="post w-full flex flex-col py-8"
                >
                  <small className="text-gray-400 text-sm">{item.date}</small>
                  <Link to={`/news/${item.slug}`} title={item.title}>
                    <h1 className="text-5xl text-black font-default text-left w-full my-4">
                      {item.title}
                    </h1>
                  </Link>
                  <p className="text-gray-600 my-4">{item.read}</p>
                  <Link
                    to={`/news/${item.slug}`}
                    title={item.title}
                    className="text-primary text-lg hover:underline"
                  >
                    Read more →
                  </Link>
                </section>
              ));
            }}
          </Await>
        </Suspense>
      </div>
    </>
  );
};

export default News;
