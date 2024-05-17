import { useEffect } from 'react';
import { useNavigate, useParams } from '@modern-js/runtime/router';
import { useModel } from '@modern-js/runtime/model';
import { Helmet } from '@modern-js/runtime/head';
import uiModel from '@/models/ui';
import { capitalizeString } from '@/utils/string';

const IdPath = () => {
  const { id } = useParams();
  const [state] = useModel(uiModel);
  const navigate = useNavigate();
  const navigation = state?.meta?.navigation?.find((el: any) => el?.key === id);

  useEffect(() => {
    if (navigation?.posts[0]) {
      navigate(navigation?.posts[0].link);
    }
  }, [id]);

  return (
    <>
      <Helmet>
        <link rel="canonical" href={`${process.env.APP_BASE_URL}/${id}`} />
        <title>{capitalizeString(id)} - Nekhor</title>
        <meta property="og:site_name" content="Nekhor" />
        <meta
          property="og:title"
          content={`${capitalizeString(id)} — Nekhor`}
        />
        <meta property="og:url" content={`${process.env.APP_BASE_URL}/${id}`} />
        <meta property="og:type" content="website" />
        <meta itemProp="name" content={`${capitalizeString(id)} — Nekhor`} />
        <meta itemProp="url" content={`${process.env.APP_BASE_URL}/${id}`} />
        <meta
          name="twitter:title"
          content={`${capitalizeString(id)} — Nekhor`}
        />
        <meta
          name="twitter:url"
          content={`${process.env.APP_BASE_URL}/${id}`}
        />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <div />
    </>
  );
};

export default IdPath;
