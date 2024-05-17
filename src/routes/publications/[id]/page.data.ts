// import { LoaderFunctionArgs } from '@modern-js/runtime/router';
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

export type PostData = PostItem;

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const supabase = createClient(request);
  const { data: one } = await supabase
    .from('publication')
    .select('*')
    .eq('slug', params.id);
  return {
    one: {
      data: !one ? null : one[0],
      status: 200,
    },
  };
};
