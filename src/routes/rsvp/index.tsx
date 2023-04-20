import { h } from 'preact';
import { Link } from 'preact-router/match';

const Back = () => (
  <Link href="/" style="color: inherit; text-decoration: none; font-size: 1rem">&lt; Back</Link>
);

const RSVP = () => (
  <div class="columns">
    <Back />
    <h1>RSVP</h1>
    <p>Comming Soon...</p>
    <br></br>
  </div>
);

export default RSVP;
