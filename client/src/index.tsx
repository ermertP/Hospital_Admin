import React from 'react';
import ReactDOM from 'react-dom/client';
import { Admin, Resource, ListGuesser } from 'react-admin';
// import simpleRestProvider from 'ra-data-simple-rest';
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';
import patient from './components/Patient';
import customDataProvider from './dataProvider';

// const dataProvider = simpleRestProvider('http://localhost:8080'); // Your Express API endpoint

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Admin
      dataProvider={customDataProvider}
      dashboard={Dashboard}
      authProvider={authProvider}
    >
      <Resource name="appointments" list={ListGuesser} />
      <Resource name="departments" list={ListGuesser} />
      <Resource name="patients" list={patient.List} />
      <Resource name="providers" list={ListGuesser} />
    </Admin>
  </React.StrictMode>
);
