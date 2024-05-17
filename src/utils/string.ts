/* eslint-disable no-useless-escape */
import { GroupedData, Post } from '@/routes/page.data';

export function capitalizeString(str: string | undefined): string {
  if (!str) {
    return '';
  }
  const words = str.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }
  return words.join(' ');
}

export function groupDataByCountry(data: Post[]): GroupedData {
  return data.reduce(
    (acc: GroupedData, post: Post) => {
      const { country } = post;
      if (!acc.data[country]) {
        acc.data[country] = [];
      }
      acc.data[country].push(post);
      return acc;
    },
    { data: {} },
  );
}

export function groupDataByLocal(data: Post[]): GroupedData {
  return data.reduce(
    (acc: GroupedData, post: Post) => {
      const { local } = post;
      if (!acc.data[local]) {
        acc.data[local] = [];
      }
      acc.data[local].push(post);
      return acc;
    },
    { data: {} },
  );
}

export function slugify(text: string) {
  if (!text) {
    return '';
  }
  return text
    .toString()
    .normalize('NFKD')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export function removeDuplicate(arr: any) {
  const seen = new Set();
  const filteredArr = arr.filter((el: any) => {
    const duplicate = seen.has(el.value);
    seen.add(el.value);
    return !duplicate;
  });
  return filteredArr;
}
