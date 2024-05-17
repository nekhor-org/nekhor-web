import { Helmet } from '@modern-js/runtime/head';
import { Link, useLoaderData } from '@modern-js/runtime/router';

const News = () => {
  const { news } = useLoaderData() as any;
  return (
    <>
      <Helmet>
        <title>News — Nekhor</title>
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
      </Helmet>
      <div className="container mx-auto divide-y divide-gray-150 w-full max-w-[1100px] py-10 px-8 md:px-0">
        {news?.data?.map((item: any) => (
          <section key={item.title} className="post w-full flex flex-col py-8">
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
        ))}
      </div>
    </>
  );
};

export default News;
