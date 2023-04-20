import { h } from 'preact';
import { Link } from 'preact-router/match';

const NotFound = () => (
  <div>
    <h1>Page Not Found</h1>
    <Link href="/">Home</Link>
  </div>
);

export default NotFound;
