import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import CurrentAlbum from '../components/albums/CurrentAlbum';
import SongList from '../components/songList/SongList';

export const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route {...rest} render={props => (user ? <Component {...props} /> : <Redirect to="/" />)} />
);

export const msToTime = s => {
	  var ms = s % 1000;
	  s = (s - ms) / 1000;
	  var secs = s % 60;
	  s = (s - secs) / 60;
	  var mins = s % 60;
	  var hrs = (s - mins) / 60;
	  return mins + ':' + secs;
	}
