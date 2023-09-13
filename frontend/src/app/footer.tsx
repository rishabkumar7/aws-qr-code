import React, { FC } from 'react';
import styles from './footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Made by 💜<a href ="https://rishabkumar.com">Rishab Kumar</a>
      </p>
    </footer>
  );
};

export default Footer;
