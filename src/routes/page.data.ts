import { groupDataByLocal } from '@/utils/string';
import { createClient } from '@/utils/supabase.server';

export type HomeData = {
  id: number;
  category: string;
  link: string;
  title: string;
  image: any;
};

export interface Post {
  id: number;
  title: string;
  subtitle: string | null;
  content: string;
  image: string;
  images: string[];
  audio: string | null;
  lng: number | null;
  lat: number | null;
  post_id: number;
  country: string;
  local: string;
  post: {
    id: number;
    lat: number | null;
    lng: number | null;
  };
  language: {
    id: number;
    name: string;
  };
}

export interface GroupedData {
  data: {
    [country: string]: Post[];
  };
}

const normalizePosts = (rawData: Post[]): any => {
  const { data } = groupDataByLocal(rawData);
  return {
    data,
    status: 200,
  };
};

export const loader = async ({ request }: any) => {
  const supabase = createClient(request);
  const { data: news } = await supabase
    .from('new')
    .select('*')
    .order('date', { ascending: false });
  const { data: publications } = await supabase.from('publication').select('*');
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/posts?language_id=1`,
  );
  const json = await response.json();
  return {
    posts: normalizePosts(json),
    publications: {
      data: publications,
      status: 200,
    },
    news: {
      data: news,
      status: 200,
    },
  };
};
