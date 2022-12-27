export default function PostFeed({ posts }) {
  return (
    <div>
      {posts
        ? posts.map((post) => <PostItem post={post} key={post.id} />)
        : null}
    </div>
  );
}

function PostItem({ post }) {
  let imageUrl;
  if (post.metadata.image) {
    imageUrl = post.metadata.image.replace("ipfs://", "https://ipfs.io/ipfs/");
  }
  return (
    <div>
      <img src={imageUrl} />
      <h2>{post.metadata.name}</h2>
    </div>
  );
}
