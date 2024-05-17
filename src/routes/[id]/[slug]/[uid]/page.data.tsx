import { defer, type LoaderFunctionArgs } from '@modern-js/runtime/router';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `${process.env.API_BASE_URL}/api/posts/${params.uid}`,
  );
  const json = await response.json();
  return defer({
    request: {
      json,
      response,
    },
    data: {
      data: json,
      status: response?.status,
    },
  });
};
