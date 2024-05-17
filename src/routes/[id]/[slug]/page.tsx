import { useEffect } from 'react';
import { useNavigate, useParams } from '@modern-js/runtime/router';
import { useModel } from '@modern-js/runtime/model';
import { Helmet } from '@modern-js/runtime/head';
import uiModel from '@/models/ui';
import { capitalizeString } from '@/utils/string';

const SlugPaths = () => {
  const { id, slug } = useParams();
  const [state] = useModel(uiModel);
  const navigate = useNavigate();
  const navigation = state?.meta?.navigation?.find((el: any) => el?.key === id);

  useEffect(() => {
    const hasItem = navigation?.posts?.find(
      (item: any) => item.link === `/${id}/${slug}/${item.post_id}`,
    );
    if (hasItem) {
      navigate(hasItem.link);
    }
  }, [id, slug]);

  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href={`${process.env.APP_BASE_URL}/${id}/${slug}`}
        />
        <title>{capitalizeString(slug)} - Nekhor</title>
        <meta property="og:site_name" content="Nekhor" />
        <meta
          property="og:title"
          content={`${capitalizeString(slug)} — Nekhor`}
        />
        <meta
          property="og:url"
          content={`${process.env.APP_BASE_URL}/${id}/${slug}`}
        />
        <meta property="og:type" content="website" />
        <meta itemProp="name" content={`${capitalizeString(slug)} — Nekhor`} />
        <meta
          itemProp="url"
          content={`${process.env.APP_BASE_URL}/${id}/${slug}`}
        />
        <meta
          name="twitter:title"
          content={`${capitalizeString(slug)} — Nekhor`}
        />
        <meta
          name="twitter:url"
          content={`${process.env.APP_BASE_URL}/${id}/${slug}`}
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <div />
    </>
  );
};

export default SlugPaths;
