import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_agree_re_hor9.svg').default,
    description: (
      <>
        PIPS was designed from the ground up to be easily
        used to get the PIP/TRIP updating up and running quickly.
      </>
    ),
  },
  {
    title: 'Collaborative',
    Svg: require('@site/static/img/undraw_engineering_team_a7n2.svg').default,
    description: (
      <>
        PIPS lets users collaborate through the Consolidation Module.
      </>
    ),
  },
  {
    title: 'Report Generation',
    Svg: require('@site/static/img/undraw_visualization_re_1kag.svg').default,
    description: (
      <>
        PIPS allows users to see a snapshot of their data submission.
        It also allows downloading records for more details.
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
