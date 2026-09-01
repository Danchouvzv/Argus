import './Demo.css'

const demoVideo = '/media/demo-ppe.mp4'

export default function Demo() {
  return (
    <section className="demo" id="demo">
      <div className="demo__frame">
        <span className="demo__eyebrow">03 — See it work</span>

        <h2 className="demo__title">
          It doesn&rsquo;t just watch.
          <br />
          It catches.
        </h2>

        <p className="demo__lede">
          The same PPE-compliance model running on the box right now — hard
          hats, vests, gloves, scored frame by frame off a live camera feed.
        </p>

        <div className="demo__screen">
          <span className="demo__bracket demo__bracket--tl" />
          <span className="demo__bracket demo__bracket--tr" />
          <span className="demo__bracket demo__bracket--bl" />
          <span className="demo__bracket demo__bracket--br" />
          <video
            className="demo__video"
            src={demoVideo}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
          />
        </div>

        <div className="demo__caption">
          <span className="demo__dot" />
          <span>Demo footage — PPE compliance</span>
        </div>
      </div>
    </section>
  )
}
