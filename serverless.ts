import type { AWS } from '@serverless/typescript';

import * as functions from '@functions/index';

const serverlessConfiguration: AWS = {
  service: 'workshop-serverless-aws',
  frameworkVersion: '3',
  useDotenv: true,
  plugins: ['serverless-esbuild', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs20.x',
    apiGateway: {
      minimumCompressionSize: 256,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      RETRIEVE_URL: '${env:RETRIEVE_URL, "http://localhost:3000/dev"}',
    },
  },
  // import the function via paths
  functions: functions,
  package: { individually: true, excludeDevDependencies: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['@aws-sdk/*'],
      target: 'node20',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
  resources: {
    Resources: {
      urlsTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: 'urls',
          AttributeDefinitions: [
            {
              AttributeName: 'shortUrl',
              AttributeType: 'S',
            },
          ],
          KeySchema: [
            {
              AttributeName: 'shortUrl',
              KeyType: 'HASH',
            },
          ],
          BillingMode: 'PAY_PER_REQUEST',
        },
      },
    },
  }
};

module.exports = serverlessConfiguration;
