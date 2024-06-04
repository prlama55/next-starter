import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merger for tailwind css
 * @param {ClassValue[]} inputs - array of class names
 * @return {string} - Space separated classes
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
