import { model } from '@modern-js/runtime/model';

export interface ItemProps {
  title: string;
  link: string;
  image?: string;
}

const uiModel = model('ui').define({
  state: {
    meta: null as any,
    news: [] as any,
    publications: [] as any,
    about: null as any,
    navigation: null as any,
    places: null as any,
    menuDrawer: {
      visible: false as boolean,
      type: 'menu' as string,
    } as any,
    lang: 'en-US' as 'en-US' | 'zh-CN',
    theme: 'light' as 'light' | 'dark',
  },
  actions: {
    setNews: (state, payload) => {
      state.news = payload;
    },
    setPublications: (state, payload) => {
      state.publications = payload;
    },
    setAbout: (state, payload) => {
      state.about = payload;
    },
    setNavigation: (state, payload) => {
      state.navigation = payload;
    },
    setMeta: (state, payload) => {
      state.meta = payload;
    },
    setPlaces: (state, payload) => {
      state.places = payload;
    },
    setMenuDrawer: (state, payload) => {
      state.menuDrawer = payload;
    },
    setLang: (state, payload) => {
      state.lang = payload;
    },
  },
});

export default uiModel;
