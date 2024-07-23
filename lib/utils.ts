import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function titleToSlug(title: string | undefined): string {
  if (!title) return '';
  return title
    .toLowerCase()
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with dashes
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple dashes with one
    .replace(/^-+/, '') // Trim dashes from start
    .replace(/-+$/, ''); // Trim dashes from end
}

export function dateToString(date: Date | undefined) {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
