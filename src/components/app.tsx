import { h } from 'preact';
import { Route, Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import NotFound from '../routes/not-found';

const App = () => (
  <div id="app">
    <main>
      <Router>
        <Route path="/" component={Home} />
        <Route default component={NotFound} />
      </Router>
    </main>
  </div>
);

export default App;
