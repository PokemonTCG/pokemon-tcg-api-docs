import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    imgSrc: 'img/gastly_home.png',
    description: (
      <>
        The Pokémon TCG API has many developer SDKs to help get your project
        going with minimal effort. If your preferred language isn't supported,
        we are always looking for more contributors.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imgSrc: 'img/haunter_home.png',
    description: (
      <>
        Don't worry about trying to stay up to date with new expansions
        and constantly changing card prices. Focus on your application, we'll handle the data.
      </>
    ),
  },
  {
    title: 'Join the Community',
    imgSrc: 'img/gengar_home.png',
    description: (
      <>
        The Pokémon TCG API continues to improve because of the community.
        Join the discord server and chat with thousands of developers using the Pokémon TCG API.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
