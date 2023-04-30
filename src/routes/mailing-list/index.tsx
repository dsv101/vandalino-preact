import { h } from 'preact';
import { Link } from 'preact-router/match';

const Back = () => (
  <Link href='/'>&lt; Back</Link>
);

const MailingList = () => (
  <div class='columns'>
    <Back></Back>
    <div class='card'>
      <h1>Join the Mailing List</h1>
    </div>
    <div class='card full-width-form'>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScAZPLRwE8Eg5sxPXdAIWZJWB6-olEgO--JgpzNSNzo5B3Vgg/viewform?embedded=true" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
    </div>
  </div>
);

export default MailingList;
