import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Real-time Validation',
    Svg: require('@site/static/img/feat1.svg').default,
    description: (
      <>
        CheckVIES provides instantaneous VAT number validation against the official VIES database, ensuring your data is always accurate.
      </>
    ),
  },
  {
    title: 'Modern API',
    Svg: require('@site/static/img/feat2.svg').default,
    description: (
      <>
        Built with developers in mind, our RESTful API is well-documented, easy to integrate, and supports multiple programming languages.
      </>
    ),
  },
  {
    title: 'Scalable & Reliable',
    Svg: require('@site/static/img/feat3.svg').default,
    description: (
      <>
        Designed for high availability and performance, CheckVIES can handle everything from single requests to large-scale batch processing.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center mb-lg" style={{marginBottom: '2rem'}}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
