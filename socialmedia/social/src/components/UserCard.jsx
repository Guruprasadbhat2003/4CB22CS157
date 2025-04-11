const UserCard = ({ user, commentCount }) => (
  <div className="bg-white p-4 shadow rounded-xl mb-4 flex items-center justify-between">
    <div>
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
    </div>
    <div className="text-right">
      <p className="text-xl font-bold text-indigo-600">{commentCount}</p>
      <p className="text-xs text-gray-500">Comments</p>
    </div>
  </div>
);
export default UserCard;
