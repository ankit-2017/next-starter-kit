import { useEffect, useState } from 'react';

const useProgressiveImg = (lowQualitySrc, highQualitySrc) => {
  console.log('low, high', lowQualitySrc, highQualitySrc);
  const [src, setSrc] = useState(lowQualitySrc);
  if (!highQualitySrc) {
    highQualitySrc = lowQualitySrc;
  }
  useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);
  return [src, { blur: src === lowQualitySrc }];
};

export default useProgressiveImg;
