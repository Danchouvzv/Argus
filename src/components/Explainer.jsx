import bg from '../assets/explainer-bg.jpg'
import './Explainer.css'

export default function Explainer() {
  return (
    <section className="explainer" id="how">
      <img
        className="explainer__bg"
        src={bg}
        alt="A halftone illustration of a medium-format camera floating against a flat blue sky"
      />

      <div className="explainer__card explainer__card--main">
        <span className="explainer__eyebrow">02 — How it works</span>
        <h2 className="explainer__title">
          Every camera you
          <br />
          already own, reporting
          <br />
          to one box.
        </h2>
        <p className="explainer__lede">
          Argus doesn&rsquo;t ask you to touch a single lens — it listens to
          the RTSP or ONVIF stream your cameras already speak.
        </p>
      </div>

      <div className="explainer__card explainer__card--detail">
        <h3 className="explainer__subtitle">Inference stays on the box</h3>
        <p className="explainer__body">
          Detection and rule evaluation run on the Jetson&rsquo;s own GPU,
          frame by frame. Nothing is queued or shipped upstream for a
          verdict — only the event crosses your firewall, and the box keeps
          working the moment your uplink doesn&rsquo;t.
        </p>
      </div>
    </section>
  )
}
