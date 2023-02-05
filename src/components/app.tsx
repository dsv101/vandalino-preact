import { h } from 'preact';
import { Route, Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';

const App = () => (
	<div id="app">
		<main>
			<Router>
				<Route path="/" component={Home} />
				{/* <Route path="/profile/" component={Profile} user="me" />
				<Route path="/profile/:user" component={Profile} /> */}
			</Router>
		</main>
	</div>
);

export default App;
