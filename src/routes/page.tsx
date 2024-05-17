import React, { useEffect } from 'react';
import { Link, useLoaderData } from '@modern-js/runtime/router';
import { useModel } from '@modern-js/runtime/model';
import { Shimmer } from 'react-shimmer';
import {
  SpeakerWaveIcon,
  HeartIcon,
  CheckIcon,
} from '@heroicons/react/20/solid';
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

  const features = [
    {
      name: 'Listen unlimited audios',
      description: 'You can listen to unlimited audios.',
      icon: SpeakerWaveIcon,
    },
    {
      name: 'Dowload audio to listen offline',
      description: 'You can download audios to listen offline.',
      icon: CheckIcon,
    },
    {
      name: 'Favorite your contents to listen later',
      description: 'You can favorite your contents to listen later.',
      icon: HeartIcon,
    },
  ];

  return (
    <div className="px-4 overflow-x-hidden pb-16">
      <section className="flex items-center justify-center py-16 flex-col border-b border-gray-200 mb-10">
        <div className="relative mb-8 rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Following In The Footsteps Of Padmasambhava .{' '}
          <Link
            title="Following In The Footsteps Of Padmasambhava"
            to="/introduction/following-in-the-footsteps-of-padmasambhava/1"
            className="font-semibold text-primary"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            Read more <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <h1 className="text-5xl font-default text-secondary">
          Following in the footsteps of the masters
        </h1>
        <h3 className="text-xl text-slate-500 mt-6">
          Nekhor connects you with the Sacred Landscape Awakening
        </h3>
        <p className="max-w-[620px] leading-7 w-full text-left lg:text-center text-slate-500 mt-8 mx-auto">
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
        <div className="shimmer-container max-w-[1240px] mx-auto w-full text-center mx-auto flex grid grid-cols-3 gap-2 mt-4">
          <Shimmer width={350} height={220} />
          <Shimmer width={350} height={220} />
          <Shimmer width={350} height={220} />
        </div>
      )}
      {currentNews?.length ? (
        <div className="container mb-8 max-w-[1240px] mx-auto flex flex-col pb-10 divide-y divide-gray-200">
          <News list={currentNews} />
        </div>
      ) : (
        <div className="shimmer-container max-w-[1240px] mx-auto w-full text-center mx-auto flex grid grid-cols-3 gap-2 mt-4">
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
        <div className="shimmer-container max-w-[1240px] mx-auto w-full text-center mx-auto flex grid grid-cols-3 gap-2 mt-4">
          <Shimmer width={350} height={220} />
          <Shimmer width={350} height={220} />
          <Shimmer width={350} height={220} />
        </div>
      )}
      <div className="overflow-hidden bg-white py-24 sm:py-32 border-t border-gray-200 mt-12">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <h3 className="text-base font-semibold leading-7 text-primary">
                  Android and iOS
                </h3>
                <p className="mt-2 font-default text-4xl font-normal tracking-tight text-gray-900 sm:text-4xl">
                  Download our app
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Stay up to date with all resources and publications. Download
                  our app on Android and iOS. We provide a user-friendly version
                  of our resources and publications.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map(feature => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-default font-medium text-2xl text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-primary"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="block">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="sm:px-6 lg:px-0">
              <div className="relative isolate overflow-hidden bg-primary px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                <div
                  className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-orange-200 opacity-20 ring-1 ring-inset ring-white"
                  aria-hidden="true"
                />
                <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                  <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          Android
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">
                          iOS
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pb-14 pt-6">
                      <img
                        src="https://images.squarespace-cdn.com/content/v1/5b735348266c075124b0ffb3/1687691989572-ROF97I4DKIMR6LMGNHY1/PHOTO-2023-06-20-18-37-33.jpg?format=500w"
                        alt="App image on store"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
