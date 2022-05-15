import { context, u128 } from "near-sdk-as";
import { Mics, Midis, Drums, Keyboards, Guitars, Mixers, Monitors, Interfaces,  alldrums, allmics, allmidis, allguitars, allinterfaces, allkeyboards, allmixers, allmonitors } from "./model";


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
export function createGuitars(name: string, price: u128, brand: string, stock: u8, condition: string, explanation: string): Guitars {
  assert(price != u128.Zero, "This discount may not be welcomed by the bosses!")
  return Guitars.addGuitars( name, price, brand, stock, condition, explanation);

}

export function getGuitars(offset: u32, limit: u32 = 5): Guitars[] {
  return Guitars.findGuitars(offset, limit)
}

export function getGuitarsbyId(id: u32): Guitars {
  return Guitars.findGuitarsbyId(id)
}

export function purchaseGuitarsbyId(id:u32): number{
const guitars = allguitars.getSome(id)
assert(context.attachedDeposit>=guitars.price,"You have insufficient balance")

if (context.attachedDeposit>=guitars.price) {  
  guitars.stock = guitars.stock -1
}
return guitars.stock
}

/* Guitars End */



/* Keyboards Start */
export function createKeyboards(name: string, price: u128, brand: string, stock: u8, condition: string, explanation: string): Keyboards {
  assert(price != u128.Zero, "This discount may not be welcomed by the bosses!")
  return Keyboards.addKeyboards( name, price, brand, stock, condition, explanation);

}

export function getKeyboards(offset: u32, limit: u32 = 5): Keyboards[] {
  return Keyboards.findKeyboards(offset, limit)
}

export function getKeyboardsbyId(id: u32): Keyboards {
  return Keyboards.findKeyboardsbyId(id)
}

export function purchaseKeyboardsbyId(id:u32): number{
const keyboards = allkeyboards.getSome(id)
assert(context.attachedDeposit>=keyboards.price,"You have insufficient balance")

if (context.attachedDeposit>=keyboards.price) {  
  keyboards.stock = keyboards.stock -1
}
return keyboards.stock
}
/* Keyboards End */



/* Interfaces Start */
export function createInterfaces(name: string, price: u128, brand: string, stock: u8, condition: string, explanation: string): Interfaces {
  assert(price != u128.Zero, "This discount may not be welcomed by the bosses!")
  return Interfaces.addInterfaces( name, price, brand, stock, condition, explanation);

}

export function getInterfaces(offset: u32, limit: u32 = 5): Interfaces[] {
  return Interfaces.findInterfaces(offset, limit)
}

export function getInterfacesbyId(id: u32): Interfaces {
  return Interfaces.findInterfacesbyId(id)
}

export function purchaseInterfacesbyId(id:u32): number{
const interfaces = allinterfaces.getSome(id)
assert(context.attachedDeposit>=interfaces.price,"You have insufficient balance")

if (context.attachedDeposit>=interfaces.price) {  
  interfaces.stock = interfaces.stock -1
}
return interfaces.stock
}
/* Interfaces End */



/* Mixers Start */
export function createMixers(name: string, price: u128, brand: string, stock: u8, condition: string, explanation: string): Mixers {
  assert(price != u128.Zero, "This discount may not be welcomed by the bosses!")
  return Mixers.addMixers( name, price, brand, stock, condition, explanation);

}

export function getMixers(offset: u32, limit: u32 = 5): Mixers[] {
  return Mixers.findMixers(offset, limit)
}

export function getMixersbyId(id: u32): Mixers {
  return Mixers.findMixersbyId(id)
}

export function purchaseMixersbyId(id:u32): number{
const mixers = allmixers.getSome(id)
assert(context.attachedDeposit>=mixers.price,"You have insufficient balance")

if (context.attachedDeposit>=mixers.price) {  
  mixers.stock = mixers.stock -1
}
return mixers.stock
}
/* Mixers End */



/* Monitors Start */
export function createMonitors(name: string, price: u128, brand: string, stock: u8, condition: string, explanation: string): Monitors {
  assert(price != u128.Zero, "This discount may not be welcomed by the bosses!")
  return Monitors.addMonitors( name, price, brand, stock, condition, explanation);

}

export function getMonitors(offset: u32, limit: u32 = 5): Monitors[] {
  return Monitors.findMonitors(offset, limit)
}

export function getMonitorsbyId(id: u32): Monitors {
  return Monitors.findMonitorsbyId(id)
}

export function purchaseMonitorsbyId(id:u32): number{
const monitors = allmonitors.getSome(id)
assert(context.attachedDeposit>=monitors.price,"You have insufficient balance")

if (context.attachedDeposit>=monitors.price) {  
  monitors.stock = monitors.stock -1
}
return monitors.stock
}
/* Monitors End */
