import { useEffect, useState } from "react";
import { getUsers, getUserPosts, getPostComments } from "../api/api";
import UserCard from "../components/UserCard";

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers();

      const userCommentCounts = await Promise.all(users.map(async (user) => {
        const posts = await getUserPosts(user.id);
        let totalComments = 0;

        for (const post of posts) {
          const comments = await getPostComments(post.id);
          totalComments += comments.length;
        }

        return { ...user, commentCount: totalComments };
      }));

      const sorted = userCommentCounts.sort((a, b) => b.commentCount - a.commentCount).slice(0, 5);
      setTopUsers(sorted);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Top 5 Users by Comments</h1>
      {topUsers.map(user => (
        <UserCard key={user.id} user={user} commentCount={user.commentCount} />
      ))}
    </div>
  );
};

export default TopUsers;
