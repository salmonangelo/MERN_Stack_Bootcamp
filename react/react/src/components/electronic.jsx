import React from 'react';
import Mobile from './mobile';

function Electronic({ mobile }) {
  return (
    <div>
      <h2>Electronics Section</h2>
      <p>Find the latest gadgets and electronics here.</p>
      <Mobile mobile={mobile} />
    </div>
  );
}

export default Electronic;