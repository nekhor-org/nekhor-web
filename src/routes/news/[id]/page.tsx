/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable react/no-danger */
import { useEffect, useState } from 'react';
import { useModel } from '@modern-js/runtime/model';
import { Link, useLoaderData, useParams } from '@modern-js/runtime/router';
import { Shimmer } from 'react-shimmer';
import ContainerDimensions from 'react-container-dimensions';
import { Helmet } from '@modern-js/runtime/head';
import uiModel from '@/models/ui';
import Icon from '@/components/Icon';
import { capitalizeString, slugify } from '@/utils/string';

const NewsPathDetails = () => {
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

    const hasItem = state.meta?.news?.data?.find(
      (item: any) => item.slug === id,
    );

    if (hasItem && !one?.data) {
      setCurrentItem({
        ...hasItem,
      });
    }
  }, [state, one]);

  useEffect(() => {
    if (currentItem) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [currentItem]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [id]);

  function getNextItem(currentItemId: any) {
    const currentIndex: any = state?.meta?.news?.data?.findIndex(
      (item: any) => item.id === currentItemId,
    );

    if (
      currentIndex === -1 ||
      currentIndex === state?.meta?.news?.data.length - 1
    ) {
      return null;
    } else {
      return state?.meta?.news?.data[currentIndex + 1];
    }
  }

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
      url: `${process.env.APP_BASE_URL}/news/${slugify(currentItem?.title)}`,
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

  const nextItem = getNextItem(currentItem?.id) || null;

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href={`${process.env.APP_BASE_URL}/publications/${slugify(currentItem?.title)}`}
        />
        <title>{currentItem?.title ?? 'News'} - Nekhor</title>
        <meta property="description" content={currentItem?.subtitle} />
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
            <div className="absolute left-0 top-0 px-4">
              <div className="w-full flex flex-col md:flex-row justify-center md:justify-between w-full items-center gap-4 p-4 mt-4 rounded-lg mb-4 backdrop-blur-sm bg-white/50">
                <div className="start flex flex-row items-center">
                  {/* <button
              className="flex items-center gap-2 py-2 px-4 rounded-full hover:bg-gray-100"
              onClick={() => toggleFavorite()}
            >
              <Icon
                name={favorited ? 'HeartOff' : 'Heart'}
                size="24px"
                color="#A67C00"
              />
              <span className={favorited ? 'text-primary' : ''}>
                {favorited ? 'Unlike' : 'Like'}
              </span>
            </button> */}
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
        {/* <div
          ref={ref}
          className={`spinner flex flex-col mt-[460px] mb-[160px] flex items-center justify-center`}
        >
          <Oval
            visible={true}
            height="72"
            width="72"
            color="#a67c00"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div> */}
        {nextItem ? (
          <div className="mt-8 border-t border-gray-100 pt-8">
            <h5 className="flex items-center gap-2">
              SEE NEXT POST{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </h5>
            <div className="w-full mt-4">
              <Link
                to={`/news/${nextItem.slug}`}
                title={nextItem?.title}
                className="flex w-full items-center gap-4"
              >
                <article
                  key={nextItem.post_id}
                  className="relative w-full isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                >
                  <img
                    src={nextItem.image}
                    alt={nextItem.title}
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  <h3 className="mt-3 text-3xl font-semibold font-default text-white">
                    <span title={nextItem.title}>
                      <span className="absolute inset-0" />
                      {capitalizeString(nextItem.title)}
                    </span>
                  </h3>
                  {nextItem.subtitle || nextItem?.read ? (
                    <div className="text-white text-md">
                      {nextItem?.read || capitalizeString(nextItem.subtitle)}
                    </div>
                  ) : undefined}
                </article>
              </Link>
            </div>
          </div>
        ) : undefined}
      </section>
    </>
  );
};

export default NewsPathDetails;
