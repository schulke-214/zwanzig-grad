import Cookies from 'js-cookie';
import React from 'react';


const CONSENT_COOKIE_NAME = 'cookie-consent';
const CONSENT_COOKIE_SETTINGS = { expires: 365 };

const COOKIE_CLEAR_HANDLER_ID = '__cookie_clear_handler';

export const setCookieClearHandler = (handler: () => void) => (window as any)[COOKIE_CLEAR_HANDLER_ID] = handler;

export const CookieContext = React.createContext({
	allow: () => Cookies.set(CONSENT_COOKIE_NAME, 'true', CONSENT_COOKIE_SETTINGS),
	permit: () => Cookies.set(CONSENT_COOKIE_NAME, 'false', CONSENT_COOKIE_SETTINGS),
	allowed: () => Cookies.get(CONSENT_COOKIE_NAME) === 'true',
	permitted: () => Cookies.get(CONSENT_COOKIE_NAME) === 'false',
	clear() {
		Object
			.keys(Cookies.getJSON())
			.map(name => Cookies.remove(name));

		if ((window as any)[COOKIE_CLEAR_HANDLER_ID])
			((window as any)[COOKIE_CLEAR_HANDLER_ID] as any)();
	}
});
