import localFont from 'next/font/local';

export const AvenirNextFont = localFont({
    src: [
        //-------- woff2 --------
        {
            path: '../../public/static/fonts/AvenirNext/AvenirNextCyr-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/static/fonts/AvenirNext/AvenirNextCyr-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/static/fonts/AvenirNext/AvenirNextCyr-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/static/fonts/AvenirNext/AvenirNextCyr-Demi.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/static/fonts/AvenirNext/AvenirNextCyr-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/static/fonts/AvenirNext/AvenirNextCyr-Heavy.woff2',
            weight: '800',
            style: 'normal',
        },

        //-------- woff --------
        {
            path: '../../public/static/fonts/AvenirNext/AvenirNextCyr-Light.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/static/fonts/AvenirNext/AvenirNextCyr-Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/static/fonts/AvenirNext/AvenirNextCyr-Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/static/fonts/AvenirNext/AvenirNextCyr-Demi.woff',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../public/static/fonts/AvenirNext/AvenirNextCyr-Bold.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/static/fonts/AvenirNext/AvenirNextCyr-Heavy.woff',
            weight: '800',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--AvenirNext',
    fallback: ['system-ui', 'sans-serif'],
});
