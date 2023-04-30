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
  <Link href="/registry">Bridal Shower Registry</Link>
);

const MailingListLink = () => (
  <Link href="/mailing-list">Join the Mailing List</Link>
);

const RSVPLink = () => (
  <Link href="/rsvp">RSVP</Link>
);


const Home = () => {
  return (
    <div>
      <SaveTheDate />
      <div style="display: flex; flex-direction: column; gap: 2rem; padding: 1.5rem 0" class="font-xl">
        <RegistryLink />
        <MailingListLink />
        {/* <span>|</span> */}
        {/* <RSVPLink /> */}
      </div>
    </div>
  );
};

export default Home;
