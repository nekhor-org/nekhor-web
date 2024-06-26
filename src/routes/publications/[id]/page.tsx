/* eslint-disable react/no-danger */
import { useEffect, useState } from 'react';
import { useModel } from '@modern-js/runtime/model';
import { useLoaderData, useParams } from '@modern-js/runtime/router';
import { Shimmer } from 'react-shimmer';
import ContainerDimensions from 'react-container-dimensions';
import { Helmet } from '@modern-js/runtime/head';
import uiModel from '@/models/ui';
import Icon from '@/components/Icon';
import { capitalizeString, slugify } from '@/utils/string';

const PublicationPathDetails = () => {
  const { one } = useLoaderData() as any;
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [state, actions] = useModel(uiModel);
  const [currentItem, setCurrentItem] = useState<any>(null);

  useEffect(() => {
    if (one?.data) {
      setCurrentItem({
        ...one?.data,
      });
    }
    const hasItem = state.meta?.publications?.data?.find(
      (item: any) => item.slug === id,
    );

    if (!one?.data && hasItem) {
      setCurrentItem({
        ...hasItem,
      });
    }
  }, [state, one]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    if (currentItem) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [currentItem]);

  const handleSubscribe = () => {
    actions.setMenuDrawer({
      visible: true,
      type: 'subscribe',
    });
  };

  const handleShare = () => {
    actions.setMenuDrawer({
      visible: true,
      type: 'share',
      url: `${process.env.APP_BASE_URL}/publications/${slugify(currentItem?.title)}`,
    });
  };

  if (one?.data?.error) {
    return (
      <section className="post w-full flex flex-col p-4 md:p-8 lg:p-12">
        <h1 className="text-4xl lg:text-6xl text-black font-default text-center w-full mt-4">
          {one?.data?.error}
        </h1>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href={`${process.env.APP_BASE_URL}/publications/${slugify(currentItem?.title)}`}
        />
        <title>{currentItem?.title ?? 'Publications'} - Nekhor</title>
        <meta property="og:site_name" content="Nekhor" />
        <meta property="og:title" content={`${currentItem?.title} — Nekhor`} />
        <meta
          property="og:url"
          content={`${process.env.APP_BASE_URL}/publications/${slugify(currentItem?.title)}`}
        />
        <meta property="og:type" content="website" />
        <meta itemProp="name" content={`${currentItem?.title} — Nekhor`} />
        <meta
          itemProp="url"
          content={`${process.env.APP_BASE_URL}/publications/${slugify(currentItem?.title)}`}
        />
        <meta name="twitter:title" content={`${currentItem?.title} — Nekhor`} />
        <meta
          name="twitter:url"
          content={`${process.env.APP_BASE_URL}/publications/${slugify(currentItem?.title)}`}
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <section className="post w-full flex max-w-[1100px] mx-auto flex-col p-3 md:p-6 lg:p-12">
        {isLoading ? (
          <div className="shimmer-container text-center mx-auto mt-4">
            <Shimmer width={240} height={48} />
          </div>
        ) : (
          <h1 className="text-4xl lg:text-6xl text-black font-default text-center w-full mt-4">
            {capitalizeString(currentItem?.title)}
          </h1>
        )}

        {isLoading ? (
          <div className="shimmer-container text-center mx-auto mt-6">
            <Shimmer width={140} height={22} />
          </div>
        ) : (
          currentItem?.subtitle && (
            <h4 className="text-center w-full text-gray-600 block mt-6 mb-8 text-lg">
              {capitalizeString(currentItem?.subtitle)}
            </h4>
          )
        )}

        {isLoading ? (
          <div className="shimmer-container text-center mx-auto mt-6">
            <Shimmer width={140} height={22} />
          </div>
        ) : (
          <p className="text-center w-full text-gray-600 block mt-6 mb-8 text-lg">
            {currentItem?.date}
          </p>
        )}

        {isLoading ? (
          <div className="shimmer-container w-full h-[620px] text-center mx-auto mt-4">
            <ContainerDimensions>
              {({ width, height }) => <Shimmer width={width} height={height} />}
            </ContainerDimensions>
          </div>
        ) : (
          <div className="w-full block mx-auto shimmer-fluid rounded-xl overflow-hidden relative">
            <img
              src={currentItem?.image}
              alt={currentItem?.title}
              className="w-full block"
            />
            <div className="absolute left-0 bottom-0 px-4">
              <div className="w-full flex flex-col md:flex-row justify-center md:justify-between w-full items-center gap-4 p-4 mt-4 rounded-lg mb-4 backdrop-blur-sm bg-white/50">
                <div className="start flex flex-row items-center">
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 py-2 bg-white bg-opacity-75 px-8 rounded-full border-2 border-primary hover:bg-white"
                  >
                    <Icon name="Share2" size="24px" color="#A67C00" />
                    <span className="text-primary">Share</span>
                  </button>
                </div>
                <div className="end">
                  <button
                    onClick={handleSubscribe}
                    className="flex items-center gap-2 py-2 bg-white bg-opacity-75 px-8 rounded-full border-2 border-primary hover:bg-white"
                  >
                    <Icon name="Headphones" size="24px" color="#A67C00" />
                    <span className="text-primary font-semibold">
                      Listen to the audio
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {isLoading ? (
          <>
            <div className="shimmer-container w-full text-center mx-auto flex flex-col gap-2 mt-4">
              <Shimmer width={380} height={14} />
              <Shimmer width={100} height={14} />
              <Shimmer width={480} height={14} />
              <Shimmer width={620} height={14} />
              <Shimmer width={470} height={14} />
              <Shimmer width={420} height={14} />
              <Shimmer width={520} height={14} />
            </div>
            <div className="shimmer-container w-full text-center mx-auto flex flex-col gap-2 mt-4">
              <Shimmer width={380} height={14} />
              <Shimmer width={100} height={14} />
              <Shimmer width={480} height={14} />
              <Shimmer width={620} height={14} />
              <Shimmer width={470} height={14} />
              <Shimmer width={420} height={14} />
              <Shimmer width={520} height={14} />
            </div>
            <div className="shimmer-container w-full text-center mx-auto flex flex-col gap-2 mt-4">
              <Shimmer width={380} height={14} />
              <Shimmer width={100} height={14} />
              <Shimmer width={480} height={14} />
              <Shimmer width={620} height={14} />
              <Shimmer width={470} height={14} />
              <Shimmer width={420} height={14} />
              <Shimmer width={520} height={14} />
            </div>
          </>
        ) : (
          <div
            className="editor-html mt-4"
            dangerouslySetInnerHTML={{
              __html: currentItem?.content?.replaceAll(
                `/rails`,
                `${process.env.API_BASE_URL}/rails`,
              ),
            }}
          />
        )}
      </section>
    </>
  );
};

export default PublicationPathDetails;
