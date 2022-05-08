# Second Hand Music
Welcome to Second Hand Music. You can sell or buy used music products on blockchain like microphones here.

## Deploying Smart Contract
### Build
First, login your testnet account with:
    
    near login
    


Step-1



Clone the repo
    
    
    

Step-2:
    
    yarn
    

    
    yarn build:release
    

    
    near dev-deploy ./build/release/simple.wasm
    

 Now you will see an id looks like "dev-123-456"

Step-3: 
    
    export CONTRACT=<your dev-id>
    


### InApp commands
 
- near call createMics/createMidis : create product
- near view getMics/getMidis : view products
- near view getMicsbyname/getMidisbyname : view specific Mics or Midis via name
- near call purchaseMidisbyname/purchaseMicsbyname : buy Midis or Mics via name

*Creating Midis:*
    
   near call $CONTRACT createMidis '{"name":" ","price":" ","brand":" ","stock":" " }' --accountId $CONTRACT 
    

 *Creating Mics*
    
    near call $CONTRACT createMidis '{"name":" ","price":" ","brand":" ","stock":" " }' --accountId $CONTRACT 
    

*Getting Mics/Midis*
    
    near view $CONTRACT getMics '{"offset": 0}' /// near view $CONTRACT getMidis '{"offset": 0}'

 *Getting Mics/Midis by Id*

    near view $CONTRACT getMidisbyId '{"id":}' --accountId $CONTRACT

*Purchase Mics/Midis*

    near call $CONTRACT purchaseMicsbyId '{"id":""}' --accountId $CONTRACT --amount <amount here>

    near call $CONTRACT purchaseMidisbyId '{"id":""}' --accountId $CONTRACT --amount <amount here>


Feel free to explore !!

    




