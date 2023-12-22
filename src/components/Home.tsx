import '../styles/content.scss'
import React from 'react';

export default function Home() {
  return (
      <>
        <div className="home">
          <div className="title">
            <div className="title-item-container">
              <p className="title-item-container-title-sub text-shadow">Piero Davatz</p>
            </div>
            <div className="title-item-container">
              <h1 className="title-item-container-title">E-Portfolio</h1>
            </div>
          </div>
          <div className="container">
            <div className="container-wrapper">
              <img className="container-wrapper-image" src="src/assets/tennis-racket.png" alt="Tennis Racket" />
            </div>
          </div>
        </div>
      </>
  )
}
