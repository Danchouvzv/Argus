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
          Argus doesn&rsquo;t ask you to touch a single lens. It listens to the
          RTSP or ONVIF stream your cameras already speak, and starts scoring
          frames from the very first connection.
        </p>
      </div>

      <div className="explainer__card explainer__card--detail">
        <h3 className="explainer__subtitle">Inference stays on the box</h3>
        <p className="explainer__body">
          Detection, tracking and rule evaluation all run on the Jetson&rsquo;s
          own GPU, frame by frame, in real time. Nothing is queued or shipped
          upstream for a verdict — the box decides on the spot, in
          milliseconds, and only the event crosses your firewall: a type, a
          zone, a timestamp, and — if you ask for one — a single frame of
          proof. Because the model lives on the hardware, Argus keeps working
          the moment your uplink doesn&rsquo;t. Pull the cable and it keeps
          watching, keeps writing to local storage, keeps triggering the
          siren.
        </p>
      </div>
    </section>
  )
}
