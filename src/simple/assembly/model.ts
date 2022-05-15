import { context, math,  u128,  PersistentUnorderedMap } from "near-sdk-as";
import { AccountId} from "../../utils";


/* Product Holders */

export let allmics = new PersistentUnorderedMap<u32, Mics>('mic')
export let allmidis = new PersistentUnorderedMap<u32, Midis>('midi')
export let alldrums = new PersistentUnorderedMap<u32, Drums>('drums')


/* Mics Start */


@nearBindgen

export class Mics {
    id: u32
    user: AccountId = context.sender
    name: string
    price: u128
    brand: string
    stock: u8
    condition: string
    explanation : string
    constructor(name: string,  price: u128, brand: string, stock: u8, condition:string, explanation:string) {
        this.id = math.hash32<string>(name)
        this.price = price
        this.brand = brand
        this.stock = stock
        this.name = name
        this.condition = condition
        this.explanation = explanation
    }

    static addMics(name: string,price: u128, brand: string, stock: u8, condition: string, explanation: string): Mics {
        const mics = new Mics(name, price, brand, stock, condition, explanation);
        allmics.set(mics.id, mics)
        return mics;
    }

    static findMics(offset: u32, limit: u32): Mics[] {
        return allmics.values(offset, offset + limit)
    }

    static findMicsbyId(id: u32): Mics {
        return allmics.getSome(id);
    }



}

/* Mics End */

/* Midis Start */ 

@nearBindgen

export class Midis {
    id: u32
    user: AccountId = context.sender
    name: string
    price: u128
    brand: string
    stock: u8
    constructor(name: string,  price: u128, brand: string, stock: u8) {
        this.id = math.hash32<string>(name)
        this.price = price
        this.brand = brand
        this.stock = stock
        this.name = name
    }

    static addMidis(name: string,price: u128, brand: string, stock: u8): Midis {
        const midis = new Midis(name, price, brand, stock);
        allmidis.set(midis.id, midis)
        return midis;
    }

    static findMidis(offset: u32, limit: u32): Midis[] {
        return allmidis.values(offset, offset + limit)
    }

    static findMidisbyId(id: u32): Midis {
        return allmidis.getSome(id);
    }



}

/* Drums Start */
@nearBindgen

export class Drums {
    id: u32
    user: AccountId = context.sender
    name: string
    price: u128
    brand: string
    stock: u8
    condition: string
    explanation : string
    constructor(name: string,  price: u128, brand: string, stock: u8, condition:string, explanation:string) {
        this.id = math.hash32<string>(name)
        this.price = price
        this.brand = brand
        this.stock = stock
        this.name = name
        this.condition = condition
        this.explanation = explanation
    }

    static addDrums(name: string,  price: u128, brand: string, stock: u8, condition:string, explanation:string): Drums{
        const drums = new Drums(name, price, brand, stock, condition, explanation);
        alldrums.set(drums.id, drums)
        return drums;
    }

    static findDrums(offset: u32, limit: u32): Drums[] {
        return alldrums.values(offset, offset + limit)
    }

    static findDrumsbyId(id: u32): Drums {
        return alldrums.getSome(id);
    }



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

