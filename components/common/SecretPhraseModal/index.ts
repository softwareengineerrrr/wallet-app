import dynamic from 'next/dynamic';

export const DynamicSecretPhraseModal = dynamic(() => import('./SecretPhraseModal').then((mod) => mod.default));
