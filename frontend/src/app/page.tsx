"use client"; // This is a client component 👈🏽

import React, { FC, useState } from 'react';
import axios from 'axios';
//import styles from './page.module.css';
import styles from './qr-code-home.module.css';



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
      <h1 className={styles.heading}>QR Code Generator</h1>
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
    </div>
  );
};

export default GenerateQRCode;
