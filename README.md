# Serverless QR Code Generator

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Furl2qr.rishab.cloud&count_bg=%23518BEB&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

Serverless QR Code Generator built with AWS Lambda and S3.

## Web App

Front-end is built using NextJS. Nothing fancy, it's a web app that uses the AWS Lambda Function to generate the QR Code for requested URL.

## API

- Send a POST Request to the Lambda Function URL - [https://api-url2qr.rishab.cloud](https://api-url2qr.rishab.cloud)
- Include the url you want QR Code for in the JSON body of your request: `{"url": "https://example.com"}`

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com"}' \
  https://api-url2qr.rishab.cloud
```

## Architecture

Architecture as of now:

- AWS Lambda
- AWS S3

![AWS QR Code architecture](./images/aws-qr-code.drawio.png)

## Demo

![AWS QR Code Generator Demo](./images/AWS-QR-Code-Demo.gif)

## License

[MIT](./LICENSE)

## Author

- Twitter - [Rishab Kumar](https://twitter.com/rishabk7)
- LinkedIn - [Rishab Kumar](https://linkedin.com/in/rishabkumar7)
