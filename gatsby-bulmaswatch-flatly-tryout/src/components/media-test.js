import React from 'react'
import active_style from '../scss/flatly/bulmaswatch.module.scss'

import {combineStyles} from '../utils/common'

function MediaTest(props){


  return(
    <section className={active_style.section} id="media">
    <h1 className={active_style.title}>Media Object</h1>
    <hr />
    <article className={active_style.media}>
      <figure className={active_style.mediaLeft}>
        <p className={combineStyles([active_style.image, active_style.is64x64])}>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg" />
        </p>
      </figure>
      <div className={active_style.mediaContent}>
        <div className={active_style.content}>
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque
            tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </div>
        <nav className={active_style.level}>
          <div className={active_style.levelLeft}>
            <a className={active_style.levelItem}>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faReply])} /></span>
            </a>
            <a className={active_style.levelItem}>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faRetweet])} /></span>
            </a>
            <a className={active_style.levelItem}>
              <span className={combineStyles([active_style.icon, active_style.isSmall])}><i className={combineStyles([active_style.fa, active_style.faHeart])} /></span>
            </a>
          </div>
        </nav>
      </div>
      <div className={active_style.mediaRight}>
        <button className={active_style.delete} />
      </div>
    </article>
    <hr />
    <article className={active_style.media}>
      <figure className={active_style.mediaLeft}>
        <p className={combineStyles([active_style.image, active_style.is64x64])}>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg" />
        </p>
      </figure>
      <div className={active_style.mediaContent}>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <textarea className={active_style.textarea} placeholder="Add a comment..." defaultValue={""} />
          </p>
        </div>
        <nav className={active_style.level}>
          <div className={active_style.levelLeft}>
            <div className={active_style.levelItem}>
              <a className={combineStyles([active_style.button, active_style.isInfo])}>Post comment</a>
            </div>
          </div>
          <div className={active_style.levelRight}>
            <div className={active_style.levelItem}>
              <label className={active_style.checkbox}>
                <input type="checkbox" /> Press enter to submit
              </label>
            </div>
          </div>
        </nav>
      </div>
    </article>
    <hr />
    <h4 className={active_style.subtitle}>Nesting</h4>
    <article className={active_style.media}>
      <figure className={active_style.mediaLeft}>
        <p className={combineStyles([active_style.image, active_style.is64x64])}>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg" />
        </p>
      </figure>
      <div className={active_style.mediaContent}>
        <div className={active_style.content}>
          <p>
            <strong>Barbara Middleton</strong>
            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit
            blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
            <br />
            <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
          </p>
        </div>
        <article className={active_style.media}>
          <figure className={active_style.mediaLeft}>
            <p className={combineStyles([active_style.image, active_style.is48x48])}>
              <img src="https://bulma.io/images/placeholders/96x96.png" />
            </p>
          </figure>
          <div className={active_style.mediaContent}>
            <div className={active_style.content}>
              <p>
                <strong>Sean Brown</strong>
                <br /> Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a
                lobortis leo feugiat.
                <br />
                <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
              </p>
            </div>
            <article className={active_style.media}>
              Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec
              massa.
            </article>
            <article className={active_style.media}>
              Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra
              euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
            </article>
          </div>
        </article>
        <article className={active_style.media}>
          <figure className={active_style.mediaLeft}>
            <p className={combineStyles([active_style.image, active_style.is48x48])}>
              <img src="https://bulma.io/images/placeholders/96x96.png" />
            </p>
          </figure>
          <div className={active_style.mediaContent}>
            <div className={active_style.content}>
              <p>
                <strong>Kayli Eunice </strong>
                <br /> Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet
                magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                <br />
                <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
              </p>
            </div>
          </div>
        </article>
      </div>
    </article>
    <article className={active_style.media}>
      <figure className={active_style.mediaLeft}>
        <p className={combineStyles([active_style.image, active_style.is64x64])}>
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/zeldman/128.jpg" />
        </p>
      </figure>
      <div className={active_style.mediaContent}>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <textarea className={active_style.textarea} placeholder="Add a comment..." defaultValue={""} />
          </p>
        </div>
        <div className={active_style.field}>
          <p className={active_style.control}>
            <button className={active_style.button}>Post comment</button>
          </p>
        </div>
      </div>
    </article>
  </section>
  )

}

export default MediaTest