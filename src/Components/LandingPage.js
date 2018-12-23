import React, { Component } from 'react';
import axios from 'axios';
import twemoji from 'twemoji';
import 'bulma/css/bulma.css';

export default class LandingPage extends Component {
  render() {
    const styles = {
      articles: {
        display: 'inline-block',
        border: '1px solid black',
        width: '30%',
      },
      buttons: {
        margin: '5%',
      },
      containers: {
        width: '25%',
        height: '5.0rem',
      }
    }
    return(
      <div className="hero-container">
      <script src="//twemoji.maxcdn.com/2/twemoji.min.js?11.2"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous"/>

        <section className="hero is-warning is-fullwidth is-fullheight">

          <div className="hero-head">
            <nav className="navbar">
              <div className="container">

              <div id="navbarMenuHeroB" className="navbar-menu">
              <div className="navbar-end">
                <span className="navbar-item">
                  <a className="button is-info is-inverted" href="https://github.com/ethmimo/research/tree/master/protocol">
                    <span className="icon">
                    <i className="fab fa-github"></i>
                    </span>
                    <span>Documentation</span>
                  </a>
                </span>
              </div>
              </div>
              </div>
            </nav>
          </div>

          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title">
                MimojiHash
              </p>
              <div className="container is-centered" style={styles.containers}>
                <a class="button is-rounded is-primary is-inverted" style={styles.buttons}>Encrypt</a>
                <a class="button is-rounded is-danger is-inverted" style={styles.buttons}>Decrypt</a>
              </div>
              <br />
              <p class="subtitle">An experiment in general key recovery.</p>
              <p className="subtitle">
              <span className="icon">
                <i className="far fa-dizzy"></i>
              </span>
              <span className="icon">
              <i className="far fa-grin"></i>
              </span>
              <span className="icon">
              <i className="far fa-grin-beam-sweat"></i>
              </span>
              <span className="icon">
              <i className="far fa-grin-hearts"></i>
              </span>
              </p>
            </div>
          </div>

          <div>
          <article class="tile is-child notification is-warning" style={styles.articles}>
            <p class="subtitle">The MimojiHashing protocol requires you to login into your Web3 object (eg Metamask) in order to access the functionality.</p>
          </article>
          <article class="tile is-child notification is-warning" style={styles.articles}>
            <p class="subtitle">Encrypt: The encryption algorithm will take in your pubKey and Mimo name returning an emoji string representing your unique hash.</p>
          </article>
          <article class="tile is-child notification is-warning" style={styles.articles}>
            <p class="subtitle">Decrypt: The decryption algorithm will take in your MimojiHash as well as your Mimo name to return your pubKey.</p>
          </article>
          </div>

      </section>
    </div>
    )
  }
}
