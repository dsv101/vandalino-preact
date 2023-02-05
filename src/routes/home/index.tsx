import { h } from 'preact';

const SaveTheDate = () => {
  return (
    <div style="max-width: 900px">
      <img style="width: 100%" src="/assets/images/save-the-date-no-links.jpg" />
    </div>
  );
};

const MoreSoon = () => {
  return (
    <p style="font-size: 2rem; font-weight: bold">More Soon...</p>
  );
};

const Home = () => {
  return (
    <div>
      <SaveTheDate />
      <MoreSoon />
    </div>
  );
};

export default Home;
