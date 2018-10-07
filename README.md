**ethsf-linnia-subgraph**

Subgraph (https://github.com/graphprotocol/graph-node/wiki/ETHSF-Hackathon) to ingest events from:

* Linnia permissions contract deployed to Ropsten - https://ropsten.etherscan.io/address/0x5d9e3f7958cb121c80389d78932816441ccd7c92
* Linnia records contract deployed to Ropsten - https://ropsten.etherscan.io/address/0x281c33f7bffd77e87990f1ca719b476d323d53fe

**Details of Hosted Graph node provided for Hackathon**

```
Subgraph name: my-data-medical
API key: eadafbb1e5704da8bcd75bf4c6cfeebd
Hosted node IP: 35.192.232.199

Endpoints / URLs

GraphiQL playground: http://35.192.232.199/my-data-medical 
HTTP endpoint for e.g. Apollo: http://35.192.232.199/my-data-medical/graphql
WS endpoint for subscriptions using e.g. Apollo: ws://35.192.232.199:8001/my-data-medical
Graph node for graph deploy: http://35.192.232.199:8020/
IPFS node for graph deploy: 35.239.68.192:5001
```

**Steps to execute**

* yarn deploy

*Note*
The above step deploys the "subgraph" we wrote to the hosted node provided by the team at `graphprotocol`.
However, there was a workaround put in place with assistance from the team at `graphprotocol` because there
is a bug in one of the `@graphprotocol` node modules. Since the size of the node module is ~113MB, that code
is not uploaded to github.

The URL for the deployed subgraph is : http://35.192.232.199:80/my-data-medical

To fetch medical  `Records` events from the deployed Ropsten network, use the following GraphQL query:

```
{
  records {
    owner
    datahash
    metadata
  }
}
```
