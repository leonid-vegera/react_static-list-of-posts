import React from 'react';
import propTypes from 'prop-types';

import './PostList.scss';
import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <ul className="postList__list">
    {posts.map(post => (
      <li key={post.id} className="postList__item">
        <Post post={post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
