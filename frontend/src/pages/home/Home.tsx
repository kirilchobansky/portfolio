import React from 'react';
import MainHub from '../../components/main-hub/MainHub';
import styles from './Home.module.css';

export default function Home(): React.JSX.Element {
  return (
    <main className={styles.homeContainer}>
      <MainHub />
    </main>
  );
}