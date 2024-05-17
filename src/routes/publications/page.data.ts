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
  const { data: publications } = await supabase.from('publication').select('*');
  const { data: about } = await supabase.from('about').select('*');
  return {
    publications: {
      data: publications,
      status: 200,
    },
    about: {
      data: about ? about[0] : [],
      status: 200,
    },
  };
};
