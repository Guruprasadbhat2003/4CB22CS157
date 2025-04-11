import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import TopUsers from './pages/TopUsers';
import TrendingPosts from './pages/TrendingPosts';
import Feed from './pages/Feed';

const App = () => (
  <Router>
    <nav className="bg-indigo-600 text-white p-4">
      <ul className="flex gap-6">
        <li><NavLink to="/" className="hover:underline">Top Users</NavLink></li>
        <li><NavLink to="/trending" className="hover:underline">Trending Posts</NavLink></li>
        <li><NavLink to="/feed" className="hover:underline">Feed</NavLink></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<TopUsers />} />
      <Route path="/trending" element={<TrendingPosts />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  </Router>
);

export default App;
