# eth-rpc-lambda
Cronjob to make ETH RPC call every minute

## Local Development
### Env
```
nvm install 18.18
nvm use 18.18
yarn install

# create .env file similar to env.example
```

### Test Serverless Function Locally
```
serverless offline
```

### Deploy to AWS Lambda
#### Dependencies
1. IAM role
2. Chain JSON-RPC url

#### Deploy
```
# need aws cli configured w cloud-formation access
serverless deploy
# OR
serverles deploy --aws-profile profileName
```

#### AWS CLI IAM access
- AmazonAPIGatewayAdministrator
- AmazonS3FullAccess
- AWSCloudFormationFullAccess
- AWSLambda_FullAccess
- CloudWatchLogsFullAccess
- IAMFullAccess
- AmazonEventBridgeFullAccess

### Note
- delete cloudformation attempt if you see this error `is in ROLLBACK_COMPLETE state and can not be updated`
