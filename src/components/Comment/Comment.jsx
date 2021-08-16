import React from 'react';
import propTypes from 'prop-types';

import './Comment.scss';

/* export const Comment = ({ comment }) => (
  <>
    <h4>{comment.name}</h4>
    <p>{comment.body}</p>
    <span>{comment.email}</span>
  </>
); */
export const Comment = ({ name, body, email }) => (
  <>
    <h4>{name}</h4>
    <p>{body}</p>
    <span>{email}</span>
  </>
);

Comment.propTypes = {
  name: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  email: propTypes.string,
};

Comment.defaultProps = {
  email: 'No email',
};
