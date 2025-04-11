import { useEffect, useState } from "react";
import { getUsers, getUserPosts } from "../api/api";
import PostCard from "../components/PostCard";

const Feed = () => {
  const [feed, setFeed] = useState([]);

  const fetchAllPosts = async () => {
    const users = await getUsers();
    const allPosts = [];

    for (const user of users) {
      const posts = await getUserPosts(user.id);
      allPosts.push(...posts);
    }

    // Sort by newest first (assuming "time" field exists; otherwise sort by id desc)
    allPosts.sort((a, b) => b.id - a.id);

    setFeed(allPosts);
  };

  useEffect(() => {
    fetchAllPosts();
    const interval = setInterval(fetchAllPosts, 10000); // refresh every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Live Feed</h1>
      {feed.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
