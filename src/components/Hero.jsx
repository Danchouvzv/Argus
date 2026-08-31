import TopBar from './TopBar.jsx'
import ArrowBox from './ArrowBox.jsx'
import heroImage from '../assets/hero.png'
import './Hero.css'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__edge hero__edge--l" aria-hidden="true" />
      <div className="hero__edge hero__edge--r" aria-hidden="true" />

      <div className="hero__plate">
        <img
          className="hero__img"
          src={heroImage}
          alt="A classical statue holding up a surveillance camera above a crowd looking on"
        />
      </div>

      {/* ruled plate lines; the horizontal rules are the bar and foot borders */}
      <div className="hero__rules" aria-hidden="true">
        <span className="rule rule--left" />
        <span className="rule rule--right" />
        <span className="ticks">
          <i /><i /><i /><i />
        </span>
      </div>

      <div className="hero__frame">
        <TopBar />

        <div className="hero__copy">
          <h1 className="hero__title">Argus sees everything.</h1>

          <p className="hero__sub">
            Not another camera in the cloud,
            <br />
            an AI box behind your own door.
          </p>

          <a className="cta" href="#contact">
            Request a demo
            <ArrowBox />
          </a>
        </div>

        <div className="hero__foot">
          <span className="chip">On your premises</span>
          <p className="hero__note">
            An NVIDIA Jetson box plugs into the CCTV you already own and reads every
            stream on site — people, vehicles, PPE, restricted zones. No footage leaves
            the building: only the events do.
          </p>
        </div>
      </div>
    </header>
  )
}
