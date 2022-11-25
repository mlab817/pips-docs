import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Online',
    Svg: require('@site/static/img/undraw_engineering_team_a7n2.svg').default,
    description: (
      <>
        This documentation is available anytime and anywhere as long as your connected to the internet.
      </>
    ),
  },
{
    title: 'Searchable',
    Svg: require('@site/static/img/undraw_agree_re_hor9.svg').default,
    description: (
        <>
            Easily find what the information you are looking form with the search bar!
        </>
    ),
},
  {
    title: 'Interactive Documentation',
    Svg: require('@site/static/img/undraw_visualization_re_1kag.svg').default,
    description: (
      <>
        This documentation allows users to experience usage of the System with interactive elements.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
