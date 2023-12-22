import dynamic from 'next/dynamic';

export const DynamicUpdateBalance = dynamic(() => import('./UpdateBalance').then((mod) => mod.default));
