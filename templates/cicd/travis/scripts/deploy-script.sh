#!/bin/sh

set -e

if [[ -z $IBMCLOUD_API_KEY ]]
then 
  echo 'Required IBM API KEY parameter'
  exit 1
fi

if [[ -z $CF_API_ENDPOINT ]]
then 
  echo 'Using default endpoint'
fi

if [[ -z $CF_ORG ]]
then 
  echo 'Required ORG parameter'
  exit 1
fi

if [[ -z $CF_SPACE ]]
then 
  echo 'Required Space parameter'
  exit 1
fi

echo 'Installing Cloud Foundry'
curl -sL https://ibm.biz/idt-installer | bash

echo ibmcloud --version
echo 'Setting IBMCloud Endpoint'
ibmcloud api $CF_API_ENDPOINT
echo 'Logged in....'
ibmcloud login --apikey $IBMCLOUD_API_KEY
echo 'Targeting ORG and Space'
ibmcloud target -o $CF_ORG -s $CF_SPACE

echo 'installing cf'
ibmcloud cf install

echo 'pushing manifest'
ibmcloud app push -f manifest.yml