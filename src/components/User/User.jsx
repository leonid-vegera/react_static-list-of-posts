/* eslint-disable */
import React from 'react';
import propTypes from 'prop-types';

import './User.scss';

export const User = ({ post }) => (
  <section>
    <h3>Author of the post:</h3>
    <p>
      <div>
        {`Name: ${post.user.name}`}
      </div>
      <div>
        {`Email: ${post.user.email}`}
      </div>
      <div>
        {`Address: ${post.user.address.street}, ${post.user.address.suite}, ${post.user.address.city}, ${post.user.address.zipcode}`}
      </div>
    </p>
  </section>
);
// export const User = ({ name, email, address }) => (
//   <section>
//     <h3>Author of the post:</h3>
//     <p>
//       <div>
//         {`Name: ${name}`}
//       </div>
//       <div>
//         {`Email: ${email}`}
//       </div>
//       <div>
//         {`Address: ${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`}
//       </div>
//     </p>
//   </section>
// );
