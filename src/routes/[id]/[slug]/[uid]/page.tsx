/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable react/no-danger */
import { useEffect, useState } from 'react';
import { useModel } from '@modern-js/runtime/model';
import { Helmet } from '@modern-js/runtime/head';
import { Link, useLoaderData, useParams } from '@modern-js/runtime/router';
import { Shimmer } from 'react-shimmer';
import ContainerDimensions from 'react-container-dimensions';
import uiModel from '@/models/ui';
import Icon from '@/components/Icon';
import { capitalizeString, slugify } from '@/utils/string';

function ErrorElement() {
  return (
    <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <section className="post w-full flex flex-col p-4 md:p-8 lg:p-12">
        <h1 className="text-4xl lg:text-6xl text-black font-default text-center w-full mt-4">
          Page not found
        </h1>
      </section>
    </>
  );
}

const SlugPathDetails = () => {
  const { data } = useLoaderData() as any;
  const [isLoading, setIsLoading] = useState(true);
  const { id, slug, uid } = useParams();
  const [state, actions] = useModel(uiModel);

  const [currentItem, setCurrentItem] = useState<any>(null);
  const navigation = state?.meta?.navigation?.find((el: any) => el?.key === id);

  useEffect(() => {
    if (data?.data) {
      setCurrentItem({
        ...data?.data,
        link: `/${id}/${slug}/${uid}`,
        title: data?.data?.title,
        image: `${process.env.API_BASE_URL}${data?.data?.image}`,
      });
    }
  }, [data]);

  useEffect(() => {
    setIsLoading(true);
    const hasItem = navigation?.posts?.find(
      (item: any) => item.link === `/${id}/${slug}/${uid}`,
    );
    if (uid && hasItem) {
      setCurrentItem(hasItem);
    }
  }, [uid, state]);

  useEffect(() => {
    if (currentItem) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [currentItem]);

  function getPreviousItem(currentItemId: any) {
    const currentIndex: any = navigation?.posts?.findIndex(
      (item: any) => item.post_id === currentItemId,
    );

    if (currentIndex === -1 || currentIndex === 0) {
      return null;
    } else {
      return navigation?.posts[currentIndex - 1];
    }
  }

  function getNextItem(currentItemId: any) {
    const currentIndex: any = navigation?.posts?.findIndex(
      (item: any) => item.post_id === currentItemId,
    );

    if (currentIndex === -1 || currentIndex === navigation?.posts.length - 1) {
      return null;
    } else {
      return navigation?.posts[currentIndex + 1];
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [slug]);

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
      url: `${process.env.APP_BASE_URL}/${id}/${slug}/${slugify(currentItem?.title)}`,
    });
  };

  const nextItem = getNextItem(currentItem?.post_id) || null;
  const prevItem = getPreviousItem(currentItem?.post_id) || null;

  if (data?.data?.error) {
    return <ErrorElement />;
  }

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href={`${process.env.APP_BASE_URL}/${id}/${slug}/${slugify(currentItem?.title)}`}
        />
        <title>{capitalizeString(currentItem?.title)} - Nekhor</title>
        <meta property="og:site_name" content="Nekhor" />
        <meta
          property="og:title"
          content={`${capitalizeString(currentItem?.title)} — Nekhor`}
        />
        <meta
          property="og:url"
          content={`${process.env.APP_BASE_URL}/${id}/${slug}/${slugify(currentItem?.title)}`}
        />
        <meta property="og:type" content="website" />
        <meta
          itemProp="name"
          content={`${capitalizeString(currentItem?.title)} — Nekhor`}
        />
        <meta
          itemProp="url"
          content={`${process.env.APP_BASE_URL}/${id}/${slug}/${slugify(currentItem?.title)}`}
        />
        <meta
          name="twitter:title"
          content={`${capitalizeString(currentItem?.title)} — Nekhor`}
        />
        <meta
          name="twitter:url"
          content={`${process.env.APP_BASE_URL}/${id}/${slug}/${slugify(currentItem?.title)}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta property="og:image" content={currentItem?.image} />
        <meta itemProp="thumbnailUrl" content={currentItem?.image} />
        <link rel="image_src" href={currentItem?.image} />
        <meta itemProp="image" content={currentItem?.image} />
        <meta name="twitter:title" content="Nekhor — Circling the Sacred" />
        <meta name="twitter:image" content={currentItem?.image} />
      </Helmet>
      <section className="post w-full flex flex-col p-4 md:p-8 lg:p-12">
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
          <h4 className="text-center w-full text-slate-600 block mt-8 mb-8 text-lg">
            {capitalizeString(currentItem?.subtitle)}
          </h4>
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
              src={
                currentItem?.image?.includes(process.env.API_BASE_URL)
                  ? `${currentItem?.image}`
                  : `${process.env.API_BASE_URL}/${currentItem?.image}`
              }
              alt={currentItem?.title}
              className="w-full block"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            <div className="absolute left-2 bottom-0 px-4">
              <div className="w-full flex flex-col md:flex-row justify-center md:justify-between w-full items-center gap-4 p-4 mt-4 rounded-lg mb-4 backdrop-blur-sm bg-white/50">
                <div className="start w-full lg:w-auto flex flex-row items-center">
                  <button
                    onClick={handleShare}
                    className="flex w-full lg:w-auto justify-center items-center gap-2 py-2 bg-white bg-opacity-75 px-8 rounded-full border-2 border-primary hover:bg-white"
                  >
                    <Icon name="Share2" size="24px" color="#A67C00" />
                    <span className="text-primary">Share</span>
                  </button>
                </div>
                <div className="start lg:end w-full lg:w-auto">
                  <button
                    onClick={handleSubscribe}
                    className="flex w-full lg:w-auto justify-center items-center gap-2 py-2 bg-white bg-opacity-75 px-8 rounded-full border-2 border-primary hover:bg-white"
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
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[24px] mb-8">
          {prevItem ? (
            <div className="mt-8 border-t border-gray-100 pt-8">
              <h5 className="flex items-center gap-4 text-primary mb-4">
                <Icon name="ArrowLeft" size="24px" color="#A67C00" />
                PREVIOUS ON THE JOURNEY
              </h5>
              <div className="w-full mt-6">
                <Link
                  to={prevItem.link}
                  className="flex w-full items-center gap-4"
                  title="Previous on the journey"
                >
                  <article
                    key={prevItem.post_id}
                    className="relative w-full isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                  >
                    <img
                      src={prevItem.image}
                      alt=""
                      className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    <h3 className="mt-3 text-4xl font-semibold font-default mb-4 text-white">
                      <span className="absolute inset-0" />
                      {capitalizeString(prevItem.title)}
                    </h3>
                    {prevItem.subtitle ? (
                      <p className="text-white leading-7 text-sm mb-8 line-clamp-3">
                        {capitalizeString(prevItem.subtitle)}
                      </p>
                    ) : undefined}
                  </article>
                </Link>
              </div>
            </div>
          ) : undefined}
          {nextItem ? (
            <div className="mt-8 border-t border-gray-100 pt-8">
              <h5 className="flex items-center justify-end gap-4 text-primary mb-4">
                NEXT STOP ON THE JOURNEY
                <Icon name="ArrowRight" size="24px" color="#A67C00" />
              </h5>
              <div className="w-full mt-6">
                <Link
                  to={nextItem.link}
                  className="flex w-full items-center gap-4"
                  title="Next stop on the journey"
                >
                  <article
                    key={nextItem.post_id}
                    className="relative w-full isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                  >
                    <img
                      src={nextItem.image}
                      alt=""
                      className="absolute inset-0 -z-10 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    <h3 className="mt-3 text-4xl font-semibold font-default mb-4 text-white">
                      <span className="absolute inset-0" />
                      {capitalizeString(nextItem.title)}
                    </h3>
                    {nextItem.subtitle ? (
                      <p className="text-white leading-7 text-sm mb-8 line-clamp-3">
                        {capitalizeString(nextItem.subtitle)}
                      </p>
                    ) : undefined}
                  </article>
                </Link>
              </div>
            </div>
          ) : undefined}
        </div>
      </section>
    </>
  );
};

export default SlugPathDetails;
