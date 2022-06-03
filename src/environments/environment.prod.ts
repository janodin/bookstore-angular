import { Environment } from '@abp/ng.core';

const baseUrl = 'https://willowy-chaja-417005.netlify.app';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://janopatundog-001-site1.btempurl.com',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'http://janopatundog-001-site1.btempurl.com',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
