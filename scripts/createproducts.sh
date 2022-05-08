#!/bin/bash

echo "example Midi creating"
echo 
echo 
near call $CONTRACT createMidis '{"name":"v-mini","price":"10","brand":"alesis","stock":1}' --accountId $CONTRACT
echo -----------------------------------------
echo "Midi has been created"
echo -----------------------------------------
echo
echo
echo
near call $CONTRACT createMidis '{"name":"mpk mini 2","price":"8","brand":"Akai","stock":2}' --accountId $CONTRACT
echo -----------------------------------------
echo -----------------------------------------
echo
echo
echo
echo "1 more Midi"
echo -----------------------------------------
echo -----------------------------------------
echo
echo
echo
near call $CONTRACT createMics '{"name":"beehive","price":"4","brand":"bee","stock":1}' --accountId $CONTRACT
echo "Pants has been created"
echo -----------------------------------------
echo -----------------------------------------
echo
echo
echo
near call $CONTRACT createMics '{"name":"c3","price":"5","brand":"samson","stock":2}' --accountId $CONTRACT
echo -----------------------------------------
echo -----------------------------------------
echo
echo
echo "1 more Mic"

