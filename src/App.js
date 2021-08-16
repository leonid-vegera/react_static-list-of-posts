/* eslint-disable max-len */
import React from 'react';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import './App.scss';
import { PostList } from './components/PostList';

//! запихиваем все 3 массива в один массив с постами (в соответствии с АйДи для постов), и дальше работаем только с ним (выходит массив старых постов, в каждый из которых добавился объект с нужным юзером и массив нужных этому посту коментов)
const preparedPost = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <PostList
      posts={preparedPost}
    />

    <p>
      <span>posts: </span>
      {posts.length}
    </p>

    <p>
      <span>comments: </span>
      {comments.length}
    </p>

    <p>
      <span>Users: </span>
      {users.length}
    </p>
  </div>
);

export default App;
