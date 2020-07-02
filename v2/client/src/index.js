import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { ApolloClient } from "apollo-client";
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import './style/style.css'
import AlbumList from './components/AlbumsList'
import AlbumCreate from './components/AlbumCreate'
import AlbumDetail from './components/AlbumDetail'

const cache = new InMemoryCache({
  dataIdFromObject: object => object.id || null
});

const client = new ApolloClient({
  link: createHttpLink({ uri: "/graphql" }),
  cache
});
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <HashRouter >
          <Route exact path="/" component={AlbumList} />
          <Route exact path="/albums/new" component={AlbumCreate} />
          <Route path="/albums/:id" component={AlbumDetail} />
        </HashRouter>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
