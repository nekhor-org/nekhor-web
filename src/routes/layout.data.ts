import { LoaderFunctionArgs } from '@modern-js/runtime/router';
import { groupDataByLocal, slugify } from '@/utils/string';
import { createClient } from '@/utils/supabase.server';

interface PathItem {
  title: string;
  link: string;
  image?: string;
}

export interface NavigationData {
  [key: string]: PathItem[];
}

const normalizePosts = (rawData: any): any => {
  const { data } = groupDataByLocal(rawData);
  return {
    data,
    status: 200,
  };
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const supabase = createClient(request);
  const { data: about } = await supabase.from('about').select('*');
  const { data: news } = await supabase
    .from('new')
    .select('*')
    .order('date', { ascending: false });
  const { data: publications } = await supabase.from('publication').select('*');
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/posts?language_id=1`,
  );
  const json = await response.json();
  const navigation = normalizePosts(json)?.data
    ? Object.keys(normalizePosts(json)?.data)
    : undefined;
  const posts = normalizePosts(json);
  return {
    meta: {
      about: {
        data: about,
        status: 200,
      },
      news: {
        data: news,
        status: 200,
      },
      publications: {
        data: publications,
        status: 200,
      },
      posts,
      navigation: navigation?.map(item => {
        const key = slugify(item)
          ?.replace('the-buddha', 'buddha')
          ?.replace('the buddha', 'buddha');
        return {
          title: item,
          link: `/${slugify(item)}`,
          key,
          image: '',
          posts: normalizePosts(json)?.data[item]?.map((post: any) => {
            return {
              ...post,
              title: post.title,
              link: `/${key}/${slugify(post.title)}/${post.post_id}`,
              image: `${process.env.API_BASE_URL}${post?.image}`,
            };
          }),
        };
      }),
    },
  };
};
