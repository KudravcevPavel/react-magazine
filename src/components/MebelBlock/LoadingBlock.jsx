import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="mebel-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="10" y="0" rx="12" ry="12" width="260" height="260" />
      <rect x="0" y="278" rx="6" ry="6" width="280" height="24" />
      <rect x="0" y="320" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="415" rx="6" ry="6" width="92" height="40" />
      <rect x="48" y="431" rx="0" ry="0" width="1" height="0" />
      <rect x="133" y="415" rx="26" ry="26" width="154" height="40" />
    </ContentLoader>
  );
}

export default LoadingBlock;
