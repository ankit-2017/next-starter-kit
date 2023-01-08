import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { OtherContainer } from 'Components/Other';
import { getPicture, resetOther } from 'Components/Other/Other.slice';
import { wrapper } from 'redux/store';

function Other() {
  const { isFetching, data, error } = useSelector((state) => state.other);
  const dispatch = useDispatch();
  const seeMoreEvent = () => {
    dispatch(resetOther());
    dispatch(getPicture());
  };
  return (
    <OtherContainer
      props={data}
      isFetching={isFetching}
      seeMoreEvent={seeMoreEvent}
    />
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res }) => {
  await store.dispatch(getPicture());
});

export default Other;
