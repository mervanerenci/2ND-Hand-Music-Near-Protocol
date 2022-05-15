# Second Hand Music
Welcome to Second Hand Music. You can sell or buy used music products on blockchain like microphones here.
*NOTE FOR NCD LOOM VIDEO:*
*there was a problem causing the createMidi function not to work properly. createMic was working so i didnt noticed at the first sight. In the loom video i didnt noticed that too. The problem was on the model.ts , i forgot to write @Nearbindgen to Midis class. I fixed it. I hope you can review this accordingly.*

*Note 2: Updated Contract, added few more instruments and products.*
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
    
   near call $CONTRACT createMidis '{"name":" ","price":" ","brand":" ","stock":" ", "condition":" ", "explanation":" " }' --accountId $CONTRACT 
    

 *Creating Mics*
    
    near call $CONTRACT createMidis '{"name":" ","price":" ","brand":" ","stock":" ", "condition":" ", "explanation":" "}' --accountId $CONTRACT 
 
 *Creating Other Products*
    
    near call $CONTRACT createKeyboards '{"name":" ","price":" ","brand":" ","stock":" ", "condition":" ", "explanation":" "}' --accountId $CONTRACT
                              Monitors 
                              Mixers
                              Drums
                              Interfaces
                              Guitars 
 
 *Viewing Products*
    
    near view $CONTRACT getMics '{"offset": 0}' /// near view $CONTRACT getMidis '{"offset": 0}'

 *Getting Products by Id*

    near view $CONTRACT getMidisbyId '{"id":}' --accountId $CONTRACT

 *Purchase Products*

    near call $CONTRACT purchaseMicsbyId '{"id":""}' --accountId $CONTRACT --amount <amount here>

    near call $CONTRACT purchaseMidisbyId '{"id":""}' --accountId $CONTRACT --amount <amount here>


Feel free to explore !!

    




