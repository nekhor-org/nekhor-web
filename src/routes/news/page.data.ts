import { LoaderFunctionArgs } from '@modern-js/runtime/router';
import { createClient } from '@/utils/supabase.server';

interface PostItem {
  id: number | string;
  read: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}

export type PostData = PostItem[];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const supabase = createClient(request);
  const { data: news } = await supabase
    .from('new')
    .select('*')
    .order('date', { ascending: false });
  return {
    news: {
      data: news,
      status: 200,
    },
  };
};
