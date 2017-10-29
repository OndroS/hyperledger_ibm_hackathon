# Digital Contracts saved on blockchain 

> This is the "Hello World" of Hyperledger Composer samples, which demonstrates the core functionality of Hyperledger Composer by changing the value of an asset.

This business network defines:

**Install npm in root**

`SampleParticipant`


**Install npm in app**

`SampleAsset`


**Generate distribution files**

`mkdir dist`

`composer archive create -a dist/viceversa.bna --sourceType dir --sourceName .`


**Deyploying product**

`cd dist`

`composer network deploy -a viceversa.bna -p hlfv1 -i PeerAdmin -s randomString -A admin -S`


**Verification of deployed network **

`composer network ping -n viceversa -p hlfv1 -i admin -s adminpw`


**Generating REST API**

`composer-rest-server / composer-rest-server -p hlfv1 -n viceversa -i admin -s admin -N never -w true`

http://localhost:3000/explorer


**Generating app skeleton**

`yo hyperledger-composer`


**Start app**

`cd my-app`

`npm start`

