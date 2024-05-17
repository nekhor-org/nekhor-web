/* eslint-disable react/no-unknown-property */
import { useEffect } from 'react';
import { useModel } from '@modern-js/runtime/model';
import { Helmet } from '@modern-js/runtime/head';
import { Outlet, useLoaderData } from '@modern-js/runtime/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import uiModel from '@/models/ui';
import DrawerMenu from '@/components/Drawer';
import 'react-loading-skeleton/dist/skeleton.css';
import './index.css';

export default function Layout() {
  const { meta } = useLoaderData() as any;
  const [state, actions] = useModel(uiModel);

  useEffect(() => {
    if (state.meta == null) {
      actions.setMeta(meta);
    }
  }, [state, meta]);

  return (
    <>
      <Helmet>
        <meta
          content="width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5"
          name="viewport"
        />
        <link rel="canonical" href={`${process.env.APP_BASE_URL}`} />
        <meta property="og:site_name" content="Nekhor — Circling the Sacred" />
        <meta property="og:title" content="Nekhor — Circling the Sacred" />
        <meta property="og:url" content={`${process.env.APP_BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="An initiative of Lhasey Lotsawa, Nekhor is driven by a single mission: to connect you with the sacred sites where awakened masters have lived, practiced, and benefited our world."
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="keywords"
          content="Nekhor, Lhasey Lotsawa, Buddhis, guru, lotus, born, following footsteps, android, audio, auspiciously, awakened, awakening, began, benefited, bhutan, blessings, bodh, born, bring, buddha, channel, collected, connect, connects, contents, dakini, dalwa, dechen, descent, download, driven, experience, expertise, explore, favorite, follow, following, footsteps, friendly, gaya, goal, ground, guidelines, guru, have, heaven, india, initiative, installment, intro, introduction, iphone, kushinagar, landscape, later, listen, lived, lotus, lumbini, masters, mission, nekhor, nepal, news, offline, online, padmasambhava, path, pilgrimage, practicalities, practiced, previous, print, project, provide, publication, publications, read, release, resources, sacred, samye, seeking, september, series, shakyamuni, singles, sites, spiritual, stories, subscribe, thirty, tibet, translations, treasured, true, unlimited, upcoming, user, version, view, visual, volume, wisdom, world, years, youtube"
        />
        <meta property="og:image" content="/thumb.png" />
        <meta property="og:image:width" content="399" />
        <meta property="og:image:height" content="97" />
        <meta itemProp="name" content="Nekhor — Circling the Sacred" />
        <meta itemProp="url" content={`${process.env.APP_BASE_URL}`} />
        <meta
          itemProp="description"
          content="An initiative of Lhasey Lotsawa, Nekhor is driven by a single mission: to connect you with the sacred sites where awakened masters have lived, practiced, and benefited our world."
        />
        <meta
          itemProp="thumbnailUrl"
          content="http://static1.squarespace.com/static/5b735348266c075124b0ffb3/t/5eabfee42343c149b75ecc7c/1588330213555/NEKHOR-home-Gold.png?format=1500w"
        />
        <link
          rel="image_src"
          href="http://static1.squarespace.com/static/5b735348266c075124b0ffb3/t/5eabfee42343c149b75ecc7c/1588330213555/NEKHOR-home-Gold.png?format=1500w"
        />
        <meta
          itemProp="image"
          content="http://static1.squarespace.com/static/5b735348266c075124b0ffb3/t/5eabfee42343c149b75ecc7c/1588330213555/NEKHOR-home-Gold.png?format=1500w"
        />
        <meta name="twitter:title" content="Nekhor — Circling the Sacred" />
        <meta
          name="twitter:image"
          content="http://static1.squarespace.com/static/5b735348266c075124b0ffb3/t/5eabfee42343c149b75ecc7c/1588330213555/NEKHOR-home-Gold.png?format=1500w"
        />
        <meta name="twitter:url" content={`${process.env.APP_BASE_URL}`} />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:description"
          content="An initiative of Lhasey Lotsawa, Nekhor is driven by a single mission: to connect you with the sacred sites where awakened masters have lived, practiced, and benefited our world."
        />
        <meta
          name="description"
          content="An initiative of Lhasey Lotsawa, Nekhor is driven by a single mission: to
connect you with the sacred sites where awakened masters have lived,
practiced, and benefited our world. We provide this through online
resources, print publications and on-the-ground expertise - so that those
seeking true wisdom can follow in their footsteps, and bring their
blessings onto the spiritual path."
        />
      </Helmet>
      <div vaul-drawer-wrapper="">
        <DrawerMenu>
          <Header />
          <Outlet />
          <Footer />
        </DrawerMenu>
      </div>
    </>
  );
}
