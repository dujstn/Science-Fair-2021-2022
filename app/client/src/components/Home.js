import logo from "./logo.png"

const Home = () => {
  return (
    <div className="homediv">
      <img src={logo} className="logo"/>
      <h2>Tracking Canadian Solar Power (with a pair of Is)</h2>

      <a href="/tracker" className="homebuttons">Solar Tracker</a>
      <a href="/about" className="homebuttons">About</a>
      <a href="/changelog" className="homebuttons">Changelog</a>

    </div>
  );
};

export default Home;
