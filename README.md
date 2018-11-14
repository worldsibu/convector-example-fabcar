# Fabcar example in Convector code

This is a <a href="https://github.com/worldsibu/convector-cli" target="_blank">Convector-CLI</a> generated project for Hyperledger Fabric.

It is based on the <a href="https://github.com/hyperledger/fabric-samples" target="_blank">Fabcar chaincode created in Fabric-samples</a>.

The idea is to showcase how to migrate your mental concepts from Go development to TypeScript based Convector smart contracts.

## Prerequisites

- <a href="https://medium.com/r/?url=https%3A%2F%2Fwww.docker.com%2Fcommunity-edition" target="_blank">Docker</a>
- <a href="https://medium.com/r/?url=https%3A%2F%2Fnodejs.org%2Fen%2Fdownload%2F" target="_blank">NodeJS 8.11.0</a>

## Run this project

```bash
npm i
# Wake yourself up a dev blockchain
npm run env:restart
# Now install the chaincode!
npm run cc:install
```

## How it was done

As simple as the example looks like, getting around all the Go code may be confusing, so we made it even easier with the framework's CLI.

```bash
# In case you don't have Convector-CLI installed already
npm i -g @worldsibu/convector-cli
conv new fabcar -c car
cd fabcar
npm i
```

Modify the default `./packages/car-cc/src/car.model.ts.` and `./packages/car-cc/src/car.controller.ts.`, refer to **Run this project** section.

## Original code

You can find the original <a href="https://github.com/hyperledger/fabric-samples/blob/release-1.3/chaincode/fabcar/go/fabcar.go" target="_blank">Go Fabcar example here</a> as well the original <a href="https://github.com/hyperledger/fabric-samples/blob/release-1.3/chaincode/fabcar/node/fabcar.js" target="_blank">NodeJS non-Convector file</a>.

This examples is provided under an Apache 2.0 license.