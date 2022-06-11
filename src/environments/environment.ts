import { Environment } from '@abp/ng.core';

const baseUrl = 'https://jano-bookstore.netlify.app';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://jano-bookstore.azurewebsites.net',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://jano-bookstore.azurewebsites.net',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
