# Serverless QR Code Generator

Serverless QR Code Generator built with AWS Lambda and S3.

## See it in action

- Send a POST Request to the Lambda Function URL - https://2udftdntvwsjrfgu7hyef475fq0eiezh.lambda-url.ca-central-1.on.aws/
- Include the url you want QR Code for in the JSON body of your request: `{"url": "https://example.com"}`

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com"}' \
  https://2udftdntvwsjrfgu7hyef475fq0eiezh.lambda-url.ca-central-1.on.aws/
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

[Rishab Kumar](https://twitter.com/rishabk7)
