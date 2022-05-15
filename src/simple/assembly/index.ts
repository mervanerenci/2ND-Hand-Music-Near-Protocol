import { context, u128 } from "near-sdk-as";
import { Mics, Midis, Drums, alldrums, allmics, allmidis } from "./model";


/* Midis Start */

export function createMidis( name: string,  price: u128, brand: string, stock: u8): Midis {
  assert(price != u128.Zero, "This discount may not be welcomed by the bosses!")
  return Midis.addMidis( name, price, brand, stock);

}

export function getMidis(offset: u32, limit: u32 = 5): Midis[] {
  return Midis.findMidis(offset, limit)
}

export function getMidisbyId(id: u32): Midis {
  return Midis.findMidisbyId(id)
}

export function purchaseMidisbyId(id:u32): number{
  const midis = allmidis.getSome(id)
  assert(context.attachedDeposit>=midis.price,"You have insufficient balance")
  
  if (context.attachedDeposit>=midis.price) {  
    midis.stock = midis.stock -1
  }
  return midis.stock
  }


/* Midis End */

/* Mics Start */


export function createMics(name: string, price: u128, brand: string, stock: u8, condition: string, explanation: string): Mics {
  assert(price != u128.Zero, "This discount may not be welcomed by the bosses!")
  return Mics.addMics( name, price, brand, stock, condition, explanation);

}

export function getMics(offset: u32, limit: u32 = 5): Mics[] {
  return Mics.findMics(offset, limit)
}

export function getMicsbyId(id: u32): Mics {
  return Mics.findMicsbyId(id)
}

export function purchaseMicsbyId(id:u32): number{
const mics = allmics.getSome(id)
assert(context.attachedDeposit>=mics.price,"You have insufficient balance")

if (context.attachedDeposit>=mics.price) {  
  mics.stock = mics.stock -1
}
return mics.stock
}


/* Mics End */

/* Drums Start */
export function createDrums(name: string, price: u128, brand: string, stock: u8, condition: string, explanation: string): Drums {
  assert(price != u128.Zero, "This discount may not be welcomed by the bosses!")
  return Drums.addDrums( name, price, brand, stock, condition, explanation);

}

export function getDrums(offset: u32, limit: u32 = 5): Drums[] {
  return Drums.findDrums(offset, limit)
}

export function getDrumsbyId(id: u32): Drums {
  return Drums.findDrumsbyId(id)
}

export function purchaseDrumsbyId(id:u32): number{
const drums = alldrums.getSome(id)
assert(context.attachedDeposit>=drums.price,"You have insufficient balance")

if (context.attachedDeposit>=drums.price) {  
  drums.stock = drums.stock -1
}
return drums.stock
}

/* Drums End */




/* Guitars Start */


/* Guitars End */



/* Keyboards Start */

/* Keyboards End */



/* Interfaces Start */

/* Interfaces End */



/* Mixers Start */

/* Mixers End */



/* Monitors Start */

/* Monitors End */
