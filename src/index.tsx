import React from 'react';
import ReactDOM from 'react-dom';
import { PrismicProvider } from '@prismicio/react';
import { client } from './services/prismic';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
