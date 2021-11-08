import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Useful Tips',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        These docs will help you learn on how to do things on the server, not just for the mods! 
        There will also be tips for new players on how to get started :D Have fun on the server!
      </>
    ),
  },
  {
    title: 'Be Up to Date',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        You can keep up to date on SMP specific news in the news page! For all other community news join our 
         <a href="https://legundo.com/discord">Discord</a> or go to <a href="https://legundo.com">Legundo's Website</a>
      </>
    ),
  },
  {
    title: '(For Mods) Learn How to use Our Plugins!',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We have a lot of plugins, some custom, some public,
        so it's important to learn how to use them all so everyone knows how to help out! :D
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
