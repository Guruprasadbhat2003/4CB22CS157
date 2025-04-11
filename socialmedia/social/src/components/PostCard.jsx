const getRandomImage = () => `https://source.unsplash.com/random/400x200?sig=${Math.floor(Math.random() * 1000)}`;

const PostCard = ({ post, showCommentCount = false }) => (
  <div className="bg-white p-4 shadow rounded-xl mb-4">
    <img src={getRandomImage()} alt="Post" className="w-full h-48 object-cover rounded-lg mb-4" />
    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
    <p className="text-gray-700">{post.body}</p>
    {showCommentCount && (
      <p className="mt-2 text-sm text-indigo-600 font-medium">
        {post.commentCount} Comments
      </p>
    )}
  </div>
);

export default PostCard;
