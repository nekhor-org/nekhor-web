import React, { useEffect } from 'react';
import { useLoaderData } from '@modern-js/runtime/router';
import { useModel } from '@modern-js/runtime/model';
import { Shimmer } from 'react-shimmer';
import uiModel from '@/models/ui';
import News from '@/components/News';
import Publications from '@/components/Publications';
import Posts from '@/components/Posts';

const Index = () => {
  const { publications, posts, news } = useLoaderData() as any;

  const [currentData, setCurrentData] = React.useState(null);
  const [currentNews, setCurrentNews] = React.useState([]);
  const [currentPublications, setCurrentPublications] = React.useState([]);

  const [state] = useModel(uiModel);

  useEffect(() => {
    if (posts?.data) {
      setCurrentData(posts?.data);
    } else if (state?.meta?.posts) {
      setCurrentData(state?.meta?.posts?.data);
    }
  }, [state, posts]);

  useEffect(() => {
    if (news?.data) {
      setCurrentNews(news?.data);
    } else if (state?.meta?.news) {
      setCurrentNews(state?.meta?.news?.data);
    }
  }, [state, news]);

  useEffect(() => {
    if (publications?.data) {
      setCurrentPublications(publications?.data);
    } else if (state?.meta?.publications) {
      setCurrentPublications(state?.meta?.publications?.data);
    }
  }, [state, publications]);

  return (
    <div className="px-4 overflow-x-hidden pb-16">
      <section className="flex items-center justify-center py-16 flex-col border-b border-gray-200 mb-10">
        <h2 className="text-5xl font-default text-secondary">
          Following in the footsteps of the masters
        </h2>
        <h3 className="text-xl text-slate-500 mt-6">
          Nekhor connects you with the Sacred Landscape Awakening
        </h3>
        <p className="max-w-[620px] leading-7 w-full text-center text-slate-500 mt-8 mx-auto">
          An initiative of{' '}
          <a
            href="https://www.lhaseylotsawa.org/"
            title="Samye Translations"
            target="_blank"
            className="text-secondary underline hover:text-blue-400"
          >
            Samye Translations
          </a>
          , Nekhor is driven by a{' '}
          <a
            href="/about-us"
            title="About Us"
            target="_blank"
            className="text-secondary underline hover:text-blue-400"
          >
            single mission
          </a>
          : to connect you with the sacred sites where awakened masters have
          lived, practiced, and benefited our world. We provide this through{' '}
          <a
            href="/introduction/the-path-of-pilgrimage/3"
            target="_blank"
            className="text-secondary underline hover:text-blue-400"
            title="Online resources"
          >
            online resources
          </a>
          ,{' '}
          <a href="/publications" title="Online resources">
            print publications
          </a>
          , and{' '}
          <a
            href="/about-us"
            title="About Us"
            target="_blank"
            className="text-secondary underline hover:text-blue-400"
          >
            on-the-ground expertise
          </a>{' '}
          — so that those seeking true wisdom can follow in their footsteps, and
          bring their blessings onto the spiritual path. For a more user
          friendly version, download our app through{' '}
          <a
            href="https://apps.apple.com/us/app/nekhor/id1495713473"
            target="_blank"
            className="text-secondary underline hover:text-blue-400"
            title="Download iOS App"
          >
            iPhone
          </a>{' '}
          or{' '}
          <a
            href="https://play.google.com/store/apps/details?gl=US&amp;hl=en&amp;id=com.cavernalabs.nekhor"
            target="_blank"
            title="Download Android App"
          >
            Android
          </a>
          , and subscribe to our{' '}
          <a
            href="https://www.youtube.com/@nekhor790"
            target="_blank"
            title="Youtube"
          >
            YouTube
          </a>{' '}
          channel for a full visual experience.{' '}
        </p>
      </section>
      {currentData ? (
        Object.entries(currentData)?.map((item: any) => {
          const [key, values] = item;
          return (
            <div
              key={key}
              className="container max-w-[1240px] mx-auto flex flex-col pb-10 divide-y divide-gray-200"
            >
              <Posts
                title={key}
                link={`/${key.toLowerCase()?.replace('the buddha', 'buddha')}`}
                list={values?.slice(0, 3)}
              />
            </div>
          );
        })
      ) : (
        <div className="shimmer-container w-full text-center mx-auto flex grid grid-cols-3 gap-2 mt-4">
          <Shimmer width={350} height={220} />
          <Shimmer width={350} height={220} />
          <Shimmer width={350} height={220} />
        </div>
      )}
      {currentNews?.length ? (
        <div className="container p-8 bg-gray-100 rounded-xl mb-8 max-w-[1240px] mx-auto flex flex-col pb-10 divide-y divide-gray-200">
          <News list={currentNews} />
        </div>
      ) : (
        <div className="shimmer-container w-full text-center mx-auto flex grid grid-cols-3 gap-2 mt-4">
          <Shimmer width={350} height={220} />
          <Shimmer width={350} height={220} />
          <Shimmer width={350} height={220} />
        </div>
      )}
      {currentPublications?.length ? (
        <div className="container max-w-[1240px] mx-auto flex flex-col pb-10 divide-y divide-gray-200">
          <Publications list={currentPublications} />
        </div>
      ) : (
        <div className="shimmer-container w-full text-center mx-auto flex grid grid-cols-3 gap-2 mt-4">
          <Shimmer width={350} height={220} />
          <Shimmer width={350} height={220} />
          <Shimmer width={350} height={220} />
        </div>
      )}
    </div>
  );
};

export default Index;
