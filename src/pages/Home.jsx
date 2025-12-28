import { Fragment } from "react"

export default function Home() {
  return (
    <Fragment>
      <div className="hero-section">
        <div className="container text-center">
          <h1 className="hero-title">Transform Your Body & Mind</h1>
          <p className="hero-sub">Your Ultimate Guide to a Healthy, Happy Life</p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col text-center">
            <h2>Welcome to HealthWave Tech</h2>
            <p>
              We make healthcare accessible, smart, and effortless using AI tools,
              digital health tracking, and instant doctor consultation.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}