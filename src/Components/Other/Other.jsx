import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { showURL } from 'Utils';
import useProgressiveImg from 'Hooks/useProgressiveImage';
import Loader from 'Components/Common/Loader/Loader';
import OtherStyles from './Other.module.scss';

function Other({ props, seeMoreEvent, isFetching }) {
  const { url } = props;
  const [src, { blur }] = useProgressiveImg('/notFoundPic.png', showURL(url) ? url : '/notFoundPic.png');
  const router = useRouter();

  return (
    <div className={OtherStyles.container}>
      <div className={OtherStyles.imageContainer}>
        {
          !isFetching ? (
            <Image
              src={src}
              width="500px"
              height="500px"
              style={{
                filter: blur ? 'blur(20px)' : 'none',
                transition: blur ? 'none' : 'filter 0.3s ease-out',
              }}
              alt="dog"
            />
          ) : <Loader />
        }
        <Button variant="primary" onClick={seeMoreEvent}>See More</Button>
        <Button variant="danger" onClick={() => router.back()}>Go Back</Button>
      </div>
    </div>
  );
}

export default Other;
