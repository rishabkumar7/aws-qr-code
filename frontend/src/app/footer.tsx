import React, { FC } from 'react';
import styles from './footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Made by <a href ="https://rishabkumar.com">Rishab Kumar</a> | <a href='https://github.com/rishabkumar7/aws-qr-code'>GitHub</a>
      </p>
    </footer>
  );
};

export default Footer;
