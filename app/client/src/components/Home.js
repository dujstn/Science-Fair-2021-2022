import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>Solar Project Something</h1>
      <p>Sample Introduction</p>
      <h2>Links</h2>

      <nav>
        <ul>
          <li>
            <Link to="/tracker">Tracker</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
