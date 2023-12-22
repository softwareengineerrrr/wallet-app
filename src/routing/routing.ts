import Router from 'next/router';

import { NUL } from '@typings/common';

/**
 * App available routes
 */
export enum AppRoutes {
    MAIN = '/',
    CREATE_WALLET = '/create-wallet',
    WALLET = '/wallet',
}

/**
 * Next.js router instance
 * @param pathname
 * @constructor
 */
const RouterInstance = async (pathname: NUL<AppRoutes>): Promise<boolean> => {
    if (pathname) {
        const finalPath = Router.pathname.slice(0, Router.pathname.lastIndexOf('/'));
        const finalPathAs = Router.asPath.slice(0, Router.asPath.lastIndexOf('/'));

        const query = Router.query;

        const url = { pathname: finalPath + pathname, query };
        const urlAs = { pathname: finalPathAs + pathname, query };
        return Router.push(url, urlAs, { shallow: true });
    }
    return false;
};

/**
 * Routes
 */
export const moveToMain = async (): Promise<boolean> => RouterInstance(AppRoutes.MAIN);
export const moveToCreateWallet = async (): Promise<boolean> => RouterInstance(AppRoutes.CREATE_WALLET);
export const moveToWallet = async (): Promise<boolean> => RouterInstance(AppRoutes.WALLET);

export const moveBack = async (): Promise<void> => Router.back();
