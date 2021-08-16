import React from 'react';
import propTypes from 'prop-types';

import './Post.scss';

import { User } from '../User';
import { CommentList } from '../CommentList';

export const Post = ({ post }) => (
  <>
    <section className="post__article">
      <h2 className="post__title">{post.title}</h2>
      <p className="post__text">{post.body}</p>
    </section>

    <User post={post} />
    {/* <User {...post} /> */}
    <hr />
    <CommentList comments={post.comments} />
  </>
);

Post.propTypes = {
  post: propTypes.shape({
    title: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
    comments: propTypes.string.isRequired,
  }).isRequired,
};
