import React from 'react';
import { useSelector } from 'react-redux';
import { wrapper } from 'redux/store';
import Home from 'Components/Home';
import { getPublicIP } from 'Components/Home/Home.slice';

export default function Index() {
  const { isFetching, error, data } = useSelector((state) => state.home);
  return (
    <Home ip={data?.ip} />
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  await store.dispatch(getPublicIP());
});
