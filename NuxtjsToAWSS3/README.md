# mynuxtjspro

> test

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).


aws s3api create-bucket --bucket nuxtjspro --region ap-northeast-1 --create-bucket-configuration LocationConstraint=ap-northeast-1

aws s3 website s3://nuxtjspro/ --index-document index.html --error-document index.html

aws s3api put-bucket-policy --bucket nuxtjspro --policy file://S3policy.json

aws s3 cp dist s3://nuxtjspro --recursive


