import { useState } from 'react'
import './Demo.css'

const REEL = [
  {
    id: 'ppe',
    tab: 'PPE compliance',
    title: (
      <>
        It doesn&rsquo;t just watch.
        <br />
        It catches.
      </>
    ),
    lede: 'The same PPE-compliance model running on the box right now — hard hats, vests, gloves, scored frame by frame off a live camera feed.',
    caption: 'Demo footage — PPE compliance',
    src: '/media/demo-ppe.mp4',
  },
  {
    id: 'traffic',
    tab: 'Traffic & plates',
    title: (
      <>
        It doesn&rsquo;t just watch.
        <br />
        It reads the plate.
      </>
    ),
    lede: 'Vehicles get detected, classified and matched to a plate on the same feed — no separate ANPR box bolted on afterward.',
    caption: 'Demo footage — vehicle & plate detection',
    src: '/media/demo-traffic.mp4',
  },
]

export default function Demo() {
  const [active, setActive] = useState(REEL[0].id)
  const demo = REEL.find((r) => r.id === active)

  return (
    <section className="demo" id="demo">
      <div className="demo__frame">
        <span className="demo__eyebrow">03 — See it work</span>

        <div className="demo__tabs" role="tablist" aria-label="Demo module">
          {REEL.map((r) => (
            <button
              key={r.id}
              type="button"
              role="tab"
              aria-selected={r.id === active}
              className={`demo__tab${r.id === active ? ' is-active' : ''}`}
              onClick={() => setActive(r.id)}
            >
              {r.tab}
            </button>
          ))}
        </div>

        <h2 className="demo__title">{demo.title}</h2>

        <p className="demo__lede">{demo.lede}</p>

        <div className="demo__screen">
          <span className="demo__bracket demo__bracket--tl" />
          <span className="demo__bracket demo__bracket--tr" />
          <span className="demo__bracket demo__bracket--bl" />
          <span className="demo__bracket demo__bracket--br" />
          <video
            key={demo.id}
            className="demo__video"
            src={demo.src}
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
          <span>{demo.caption}</span>
        </div>
      </div>
    </section>
  )
}
