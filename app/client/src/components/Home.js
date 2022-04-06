import logo from "./logo.png"

const Home = () => {
  return (
    <div className="homediv">
      <img src={logo} className="logo"/>
      <h2 className="homeTitle">Tracking Canadian Solar Power (with a pair of Is)</h2>

      <a href="/tracker" className="homebuttons">Solar Tracker - Power</a>
      <a href="/tracker-brk" className="homebuttons">Solar Tracker - Cost</a>
      <a href="/about" className="homebuttons">About</a>
      <a href="/changelog" className="homebuttons">Changelog</a>

    </div>
  );
};

export default Home;
