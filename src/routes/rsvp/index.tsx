import { createRef, h } from 'preact';
import { Link } from 'preact-router/match';

const Back = () => (
  <Link href="/">&lt; Back</Link>
);

const RSVP = () => (
  <div class="columns">
    <Back />
    <h1>RSVP</h1>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd6qbM8VW1q6Y9H8h7aUjrC47QwlDFJuzN39Wg-TFZSAj0aMg/viewform?usp=sf_link" target="_blank">Click here if you are having trouble...</a>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSd6qbM8VW1q6Y9H8h7aUjrC47QwlDFJuzN39Wg-TFZSAj0aMg/viewform?embedded=true"
      allowTransparency={true}
      width={640}
      height={1550}
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
    >{
      'Loading Form...'
    }</iframe>
  </div>
);

export default RSVP;
