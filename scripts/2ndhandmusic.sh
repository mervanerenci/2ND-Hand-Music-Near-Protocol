#!/bin/bash
echo "deleting $CONTRACT"
echo
near delete $CONTRACT

echo ---------------------------------------
echo 
echo
echo "cleaning up the /neardev folder"
echo
echo
rm -rf ./neardev

set -e

yarn

echo
echo
echo

echo
echo ---------------------------------------
echo
echo "rebuilding"
echo
echo
yarn build:release

echo ---------------------------------------
echo
echo "redeploying the contract"
echo
near dev-deploy ./build/release/simple.wasm

echo ---------------------------------------
echo
echo "run the following command"
echo
echo "export CONTRACT=dev-12345..."
echo

exit 0
