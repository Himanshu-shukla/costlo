import "./Loader.scss";
const Loader = () => {
  return (
    <div className="loader">
      <svg
        className="astrology"
        viewBox="0 0 200 200"
        width="200px"
        height="200px"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background glowing circle (cosmic aura) */}
        <circle
          className="astrology__aura"
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeDasharray="502.65 502.65"
          strokeDashoffset="502.65"
        />

        {/* Gradient for aura */}
        <defs>
          <radialGradient id="gradient" r="100%" cx="50%" cy="50%">
            <stop offset="0%" stopColor="hsl(48, 100%, 70%)" />
            <stop offset="100%" stopColor="hsl(223, 90%, 50%)" />
          </radialGradient>
        </defs>

        {/* Moon in the center */}
        <circle
          className="astrology__moon"
          cx="100"
          cy="100"
          r="25"
          fill="hsl(48, 100%, 85%)"
          stroke="hsl(48, 100%, 65%)"
          strokeWidth="3"
        />

        {/* Craters on the moon */}
        <circle cx="90" cy="95" r="5" fill="hsl(48, 30%, 70%)" />
        <circle cx="110" cy="105" r="3" fill="hsl(48, 40%, 75%)" />
        <circle cx="95" cy="115" r="2" fill="hsl(48, 35%, 65%)" />

        {/* Orbiting stars */}
        <g className="astrology__orbit" transform="translate(100,100)">
          <circle className="astrology__star" r="5" cx="60" cy="0" fill="hsl(223, 90%, 80%)" />
          <circle className="astrology__star" r="3" cx="-60" cy="0" fill="hsl(48, 100%, 80%)" />
          <circle className="astrology__star" r="4" cx="0" cy="60" fill="hsl(33, 90%, 70%)" />
        </g>
      </svg>
    </div>
  );
};

export default Loader;
