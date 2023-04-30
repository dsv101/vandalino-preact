import { h } from 'preact';
import { Route, Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Registry from '../routes/registry';
import NotFound from '../routes/not-found';
import RSVP from '../routes/rsvp';
import MailingList from '../routes/mailing-list'

const App = () => (
  <div id="app">
    <main>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/registry" component={Registry} />
        <Route path="/mailing-list" component={MailingList} />
        <Route path="/rsvp" component={RSVP} />
        <Route default component={NotFound} />
        {/* <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} /> */}
      </Router>
    </main>
  </div>
);

export default App;
