import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Styles from './Home.module.scss';

function Home({ ip }) {
  return (
    <div className={Styles.homeContainer}>
      <h1>
        Your Public Ip:
        {ip}
      </h1>
      <Link href="/other"> go to other </Link>
    </div>
  );
}

Home.defaultProps = {
  ip: '',
};

Home.propTypes = {
  ip: PropTypes.string,
};

export default Home;
