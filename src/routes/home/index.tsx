import { h } from 'preact';
// import { Link } from 'preact-router/match';

const UsInLimo = () => {
  return (
    <div style="max-width: 900px">
      <img style="width: 100%; border: 48px outset white; border-radius: 12px" src="/assets/images/day-of/alescia-and-david-limo-00.jpg" />
    </div>
  );
};

const MailingListLink = () => (
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScAZPLRwE8Eg5sxPXdAIWZJWB6-olEgO--JgpzNSNzo5B3Vgg/viewform?usp=sf_link" target="_blank">Join the Mailing List</a>
);

const Home = () => {
  return (
    <div>
      <h1 class="cheltenham font-xl" style="text-align: center">Vandalino Family</h1>
      <br />
      <UsInLimo />
      <div style="display: flex; flex-direction: column; gap: 2rem; padding: 1.5rem 0" class="font-xl">
        <MailingListLink />
      </div>
    </div>
  );
};

export default Home;
