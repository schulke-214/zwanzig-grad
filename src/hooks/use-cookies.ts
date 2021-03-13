import { useContext } from 'react';

import { CookieContext } from 'lib/cookies';


export const useCookies = () => {
	return useContext(CookieContext);
};
