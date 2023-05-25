import { h } from 'preact';
import { Link } from 'preact-router/match';

const SaveTheDate = () => {
  return (
    <div style="max-width: 900px">
      <img style="width: 100%" src="/assets/images/save-the-date-no-links.jpg" />
    </div>
  );
};

const RegistryLink = () => (
  <Link href="/registry">Registry</Link>
);

const MailingListLink = () => (
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScAZPLRwE8Eg5sxPXdAIWZJWB6-olEgO--JgpzNSNzo5B3Vgg/viewform?usp=sf_link" target="_blank">Join the Mailing List</a>
);

const RSVPLink = () => (
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSd6qbM8VW1q6Y9H8h7aUjrC47QwlDFJuzN39Wg-TFZSAj0aMg/viewform?usp=sf_link" target="_blank">Wedding RSVP</a>
);

const Home = () => {
  return (
    <div>
      <SaveTheDate />
      <div style="display: flex; flex-direction: column; gap: 2rem; padding: 1.5rem 0" class="font-xl">
        <RegistryLink />
        <RSVPLink />
        <MailingListLink />
      </div>
    </div>
  );
};

export default Home;
