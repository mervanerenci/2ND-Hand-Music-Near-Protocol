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
echo "1 more Midi added"
echo -----------------------------------------
echo -----------------------------------------
echo
echo
echo
near call $CONTRACT createMics '{"name":"beehive","price":"4","brand":"bee","stock":1, "condition":"new", "explanation": "Closed pack"}' --accountId $CONTRACT
echo "Mics has been created"
echo -----------------------------------------
echo -----------------------------------------
echo
echo
echo
near call $CONTRACT createKeyboards '{"name":"c5","price":"10","brand":"KORG","stock":1, "condition": "used", "explanation": "I bought this mic 3 years ago. Have few scratches."}' --accountId $CONTRACT
echo -----------------------------------------
echo -----------------------------------------
echo
echo
echo "1 Keyboard Added"

