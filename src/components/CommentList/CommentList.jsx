import React from 'react';
import propTypes from 'prop-types';

import './CommentList.scss';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <section>
    <h3>Comments:</h3>
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <Comment {...comment} />
          {/* <Comment comment={comment} /> */}
        </li>
      ))}
    </ul>
  </section>
);

CommentList.propTypes = {
  comments: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
