import { useEffect, useState } from "react";
import { getUsers, getUserPosts, getPostComments } from "../api/api";
import PostCard from "../components/PostCard";

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers();
      const allPosts = [];

      for (const user of users) {
        const posts = await getUserPosts(user.id);
        allPosts.push(...posts);
      }

      const postsWithComments = await Promise.all(
        allPosts.map(async (post) => {
          const comments = await getPostComments(post.id);
          return { ...post, commentCount: comments.length };
        })
      );

      const maxCount = Math.max(...postsWithComments.map(p => p.commentCount));
      const topPosts = postsWithComments.filter(p => p.commentCount === maxCount);

      setTrendingPosts(topPosts);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trending Posts</h1>
      {trendingPosts.map(post => (
        <PostCard key={post.id} post={post} showCommentCount />
      ))}
    </div>
  );
};

export default TrendingPosts;
