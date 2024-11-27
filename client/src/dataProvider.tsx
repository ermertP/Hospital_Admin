import { fetchUtils } from 'ra-core';
import simpleRestProvider from 'ra-data-simple-rest';

const customDataProvider = simpleRestProvider(
  process.env.API_URL ||
    `${window.location.origin + window.location.pathname}api/v1`,
  fetchUtils.fetchJson,
  'X-Total-Count'
);

export default customDataProvider;
