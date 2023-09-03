import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={
              <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
            }/>
          <Route path="/login" element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            } />
          <Route path="/contacts" element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            } />
        </Route>
      </Routes>
  );
};

export { App };
