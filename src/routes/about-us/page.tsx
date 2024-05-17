/* eslint-disable react/no-danger */
import { useLoaderData } from '@modern-js/runtime/router';
import { useEffect, useState } from 'react';
import { useModel } from '@modern-js/runtime/model';
import { Helmet } from '@modern-js/runtime/head';
import Icon from '@/components/Icon';
import uiModel from '@/models/ui';

const AboutUs = () => {
  const { about } = useLoaderData() as any;
  const [state] = useModel(uiModel);
  const [currentItem, setCurrentItem] = useState<any>(null);

  useEffect(() => {
    if (about?.data) {
      setCurrentItem({
        ...about?.data,
      });
    }
    if (!about?.data && state?.about?.data?.length) {
      setCurrentItem({
        ...state?.about?.data[0],
      });
    }
  }, [state, about]);

  return (
    <>
      <Helmet>
        <meta
          content="width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5"
          name="viewport"
        />
        <title>About Us — Nekhor</title>
        <link rel="canonical" href={`${process.env.APP_BASE_URL}/about-us`} />
        <meta property="og:site_name" content="Nekhor" />
        <meta property="og:title" content="About Us &mdash; Nekhor" />
        <meta
          property="og:url"
          content={`${process.env.APP_BASE_URL}/about-us`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/thumb.png" />
        <meta
          property="keywords"
          content="Nekhor, Lhasey Lotsawa, Buddhis, guru, lotus, born, following footsteps, android, audio, auspiciously, awakened, awakening, began, benefited, bhutan, blessings, bodh, born, bring, buddha, channel, collected, connect, connects, contents, dakini, dalwa, dechen, descent, download, driven, experience, expertise, explore, favorite, follow, following, footsteps, friendly, gaya, goal, ground, guidelines, guru, have, heaven, india, initiative, installment, intro, introduction, iphone, kushinagar, landscape, later, listen, lived, lotus, lumbini, masters, mission, nekhor, nepal, news, offline, online, padmasambhava, path, pilgrimage, practicalities, practiced, previous, print, project, provide, publication, publications, read, release, resources, sacred, samye, seeking, september, series, shakyamuni, singles, sites, spiritual, stories, subscribe, thirty, tibet, translations, treasured, true, unlimited, upcoming, user, version, view, visual, volume, wisdom, world, years, youtube"
        />
        <meta itemProp="name" content="About Us — Nekhor" />
        <meta itemProp="url" content={`${process.env.APP_BASE_URL}/about-us`} />
        <meta name="twitter:title" content="About Us — Nekhor" />
        <meta
          name="twitter:url"
          content={`${process.env.APP_BASE_URL}/about-us`}
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <div className="container mx-auto max-w-[1150px]">
        <section className="post w-full flex flex-col p-4 md:p-8 lg:p-12">
          <h2 className="text-6xl text-secondary lg:text-6xl text-black font-default text-center w-full mt-4">
            {currentItem?.title}
          </h2>
          <blockquote className="blockquote w-full flex items-center justify-center flex-col pt-4 pb-16">
            <div className="flex items-center py-8">
              <Icon name="Quote" color="#999" size="42px" />
            </div>
            <div
              className="editor-html"
              dangerouslySetInnerHTML={{ __html: currentItem?.description }}
            />

            <span className="w-[60px] h-2 rounded-full bg-gray-200 mt-16 inline-flex" />
          </blockquote>

          <div className="w-full relative mb-8">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5b735348266c075124b0ffb3/1592936679391-3Y6XQG1N0EFQ8HTX1EML/Asura+Cave+and+Yanglesho%CC%88+-+04.jpg?format=2500w"
              className="w-full block mx-auto rounded-xl overflow-hidden"
              alt={currentItem?.title}
            />
          </div>
          <div
            className="editor-html"
            dangerouslySetInnerHTML={{ __html: currentItem?.content }}
          />
          <div className="w-full relative mb-8 pt-8 mt-8 border-t border-gray-100">
            <h3 className="text-6xl mb-8 pb-4 text-secondary lg:text-6xl text-black font-default text-center w-full mt-4">
              What we do
            </h3>
            <div
              className="editor-html"
              dangerouslySetInnerHTML={{ __html: currentItem?.what_we_do }}
            />
          </div>
          <div className="w-full relative mb-8 pt-8 mt-8 border-t border-gray-100">
            <h3 className="text-6xl mb-8 pb-4 text-secondary lg:text-6xl text-black font-default text-center w-full mt-4">
              Support our mission
            </h3>
            <div
              className="editor-html"
              dangerouslySetInnerHTML={{ __html: currentItem?.donation_page }}
            />
            <div className="w-full flex justify-center">
              <a
                href={currentItem?.donation_link}
                className="bg-primary py-4 px-8 rounded-lg text-white mx-auto text-lg"
              >
                Join us on Patreon
              </a>
            </div>
          </div>
          <div className="w-full relative mb-8 pt-8 mt-8 border-t border-gray-100">
            <h3 className="text-6xl mb-8 pb-4 text-secondary lg:text-6xl text-black font-default text-center w-full mt-4">
              Acknowledgements
            </h3>
            <div
              className="editor-html"
              dangerouslySetInnerHTML={{
                __html: currentItem?.acknowledgements,
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
