import withData from './with-data';

const Posts = ({ data }) => (
  <div className='container user-list'>
    <h1> POSTS </h1>
    {data.map(post => (
      <div className='post' key={post.id}>
        <h1> {post.title} </h1>
        <h2> {post.body} </h2>
      </div>
    ))}
  </div>
);

export default withData(Posts);