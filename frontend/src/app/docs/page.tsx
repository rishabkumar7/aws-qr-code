import Layout from '../layout' 
import React, { FC } from 'react';
import styles from './docs.module.css';
import SocialIcons from '../SocialIcons';

const Docs: FC = () => {
  return (
    <Layout>
    <div className={styles.container}>
      <SocialIcons />
      <div className = {styles.description}>
      <h1 className={styles.heading}>API Documentation</h1>
      <h2 className={styles.heading}>Generate QR Code</h2>
      <p>This API generates a QR code for a given URL.</p>
      <h3 className={styles.heading}>Endpoint</h3>
      <p>POST https://api-url2qr.rishab.cloud</p>
      <h3 className={styles.heading}>Request Parameters</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>url</td>
            <td>string</td>
            <td>The URL to generate the QR code for.</td>
          </tr>
        </tbody>
      </table>
      <h3 className={styles.heading}>Response</h3>
      <p>The API will return a JSON object with the following properties:</p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>qr_code_url</td>
            <td>string</td>
            <td>The URL of the generated QR code image.</td>
          </tr>
        </tbody>
      </table>
      <h3 className={styles.heading}>cURL Example:</h3>
      <p className={styles.code}>curl -X POST \ <br />
  -H "Content-Type: application/json" \ <br />
  -d '{'{'}"url": "https://example.com"{'}'}' \ <br />
  https://api-url2qr.rishab.cloud</p>
    </div>
    </div>
    </Layout>
  );
};

export default Docs;