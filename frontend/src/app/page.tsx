"use client"; // This is a client component 👈🏽

import React, { FC, useState } from 'react';
import axios from 'axios';
import Footer from './footer';
import styles from './page.module.css';
import Link from 'next/link';
import SocialIcons from './SocialIcons';
//import styles from './qr-code-home.module.css';



const GenerateQRCode: FC = () => {
  const [url, setUrl] = useState<string>('');
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://2udftdntvwsjrfgu7hyef475fq0eiezh.lambda-url.ca-central-1.on.aws/', { url });
      setQrCodeUrl(response.data.qr_code_url);
    } catch (error) {
      console.error('Error generating QR Code:', error);
    }
  };

  return (
    <div className={styles.container}>
      <SocialIcons />
      <div className={styles.light}>
      <h1 className={styles.heading}>URL 2 QR</h1>
      <p className={styles.description}>Generate QR Codes for your URLs</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="url"
          placeholder="Enter URL: https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button className={styles.button} type="submit">Generate QR Code</button>
      </form>
      {qrCodeUrl && <img className={styles.img} src={qrCodeUrl} alt="Generated QR Code" />}
      <div className={styles.container}>
        <Link href="/docs">
          <button className={styles.buttonlink}>API Documentation</button>
          </Link>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default GenerateQRCode;
