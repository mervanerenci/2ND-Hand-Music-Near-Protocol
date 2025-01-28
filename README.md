# Second Hand Music
Welcome to Second Hand Music. You can sell or buy used music products on blockchain like microphones here.


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
- You can buy, sell, view ; Mics, Midis, Drums, Keyboards, Guitars, Mixers, Monitors and Interfaces.
 

 *Creating Mics*
    
    near call $CONTRACT createMics '{"name":" ","price":" ","brand":" ","stock":" ", "condition":" ", "explanation":" "}' --accountId $CONTRACT 
 
 *Creating Other Products*
    
    near call $CONTRACT createKeyboards '{"name":" ","price":" ","brand":" ","stock":" ", "condition":" ", "explanation":" "}' --accountId $CONTRACT
                              Monitors 
                              Mixers
                              Drums
                              Interfaces
                              Guitars 
                              Midis
 
 *Viewing Products*
    
    near view $CONTRACT getMics '{"offset": 0}' /// near view $CONTRACT getMidis '{"offset": 0}'

 *Getting Products by Id*

    near view $CONTRACT getMidisbyId '{"id":}' --accountId $CONTRACT

 *Purchase Products*

    near call $CONTRACT purchaseMicsbyId '{"id":""}' --accountId $CONTRACT --amount <amount here>

    near call $CONTRACT purchaseMidisbyId '{"id":""}' --accountId $CONTRACT --amount <amount here>


Feel free to explore !!

    




