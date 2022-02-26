import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Heliios</h1>
      <h2>Tracking Canadian Solar Power (with a pair of Is)</h2>

      <nav>
        <button type="button" class="block" onclick="window.location.href='https://heliios.herokuapp.com/tracker">Solar Tracker</button>
        <button type="button" class="block">About</button>
        <button type="button" class="block">Changelog</button>
      </nav>
    </div>
  );
};

export default Home;
