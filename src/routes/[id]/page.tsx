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
        <meta
          content="width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5"
          name="viewport"
        />
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
          property="keywords"
          content="Nekhor, Lhasey Lotsawa, Buddhis, guru, lotus, born, following footsteps, android, audio, auspiciously, awakened, awakening, began, benefited, bhutan, blessings, bodh, born, bring, buddha, channel, collected, connect, connects, contents, dakini, dalwa, dechen, descent, download, driven, experience, expertise, explore, favorite, follow, following, footsteps, friendly, gaya, goal, ground, guidelines, guru, have, heaven, india, initiative, installment, intro, introduction, iphone, kushinagar, landscape, later, listen, lived, lotus, lumbini, masters, mission, nekhor, nepal, news, offline, online, padmasambhava, path, pilgrimage, practicalities, practiced, previous, print, project, provide, publication, publications, read, release, resources, sacred, samye, seeking, september, series, shakyamuni, singles, sites, spiritual, stories, subscribe, thirty, tibet, translations, treasured, true, unlimited, upcoming, user, version, view, visual, volume, wisdom, world, years, youtube"
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
