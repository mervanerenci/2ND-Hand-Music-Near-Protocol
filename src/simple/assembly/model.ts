import { context, math,  u128,  PersistentUnorderedMap } from "near-sdk-as";
import { AccountId} from "../../utils";


/* Product Holders */

export let allmics = new PersistentUnorderedMap<u32, Mics>('mic')
export let allmidis = new PersistentUnorderedMap<u32, Midis>('midi')
export let alldrums = new PersistentUnorderedMap<u32, Drums>('drum')
export let allguitars = new PersistentUnorderedMap<u32, Guitars>('guitar')
export let allinterfaces = new PersistentUnorderedMap<u32, Interfaces>('interface')
export let allkeyboards = new PersistentUnorderedMap<u32, Keyboards>('keyboard')
export let allmonitors = new PersistentUnorderedMap<u32, Monitors>('monitor')
export let allmixers = new PersistentUnorderedMap<u32, Mixers>('mixer')


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
@nearBindgen
export class Guitars {
    id: u32
    user: AccountId = context.sender
    name: string
    price: u128
    brand: string
    stock: u8
    condition: string
    explanation: string
    constructor(name: string,  price: u128, brand: string, stock: u8, condition:string, explanation:string) {
        this.id = math.hash32<string>(name)
        this.price = price
        this.brand = brand
        this.stock = stock
        this.name = name
        this.condition = condition
        this.explanation = explanation
    }

    static addGuitars(name: string,  price: u128, brand: string, stock: u8, condition:string, explanation:string): Guitars{
        const guitars = new Guitars(name, price, brand, stock, condition, explanation);
        allguitars.set(guitars.id, guitars)
        return guitars;
    }

    static findGuitars(offset: u32, limit: u32): Guitars[] {
        return allguitars.values(offset, offset + limit)
    }

    static findGuitarsbyId(id: u32): Guitars {
        return allguitars.getSome(id);
    }



}

/* Guitars End */



/* Keyboards Start */
@nearBindgen
export class Keyboards {
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

    static addKeyboards(name: string,  price: u128, brand: string, stock: u8, condition:string, explanation:string): Keyboards{
        const keyboards = new Keyboards(name, price, brand, stock, condition, explanation);
        allkeyboards.set(keyboards.id, keyboards)
        return keyboards;
    }

    static findKeyboards(offset: u32, limit: u32): Keyboards[] {
        return allkeyboards.values(offset, offset + limit)
    }

    static findKeyboardsbyId(id: u32): Keyboards {
        return allkeyboards.getSome(id);
    }



}

/* Keyboards End */



/* Interfaces Start */
@nearBindgen
export class Interfaces {
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

    static addInterfaces(name: string,  price: u128, brand: string, stock: u8, condition:string, explanation:string): Interfaces{
        const interfaces = new Interfaces(name, price, brand, stock, condition, explanation);
        allinterfaces.set(interfaces.id, interfaces)
        return interfaces;
    }

    static findInterfaces(offset: u32, limit: u32): Interfaces[] {
        return allinterfaces.values(offset, offset + limit)
    }

    static findInterfacesbyId(id: u32): Interfaces {
        return allinterfaces.getSome(id);
    }



}

/* Interfaces End */



/* Mixers Start */
@nearBindgen
export class Mixers {
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

    static addMixers(name: string,  price: u128, brand: string, stock: u8, condition:string, explanation:string): Mixers{
        const mixers = new Mixers(name, price, brand, stock, condition, explanation);
        allmixers.set(mixers.id, mixers)
        return mixers;
    }

    static findMixers(offset: u32, limit: u32): Mixers[] {
        return allmixers.values(offset, offset + limit)
    }

    static findMixersbyId(id: u32): Mixers {
        return allmixers.getSome(id);
    }



}

/* Mixers End */



/* Monitors Start */
@nearBindgen
export class Monitors {
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

    static addMonitors(name: string,  price: u128, brand: string, stock: u8, condition:string, explanation:string): Monitors{
        const monitors = new Monitors(name, price, brand, stock, condition, explanation);
        allmonitors.set(monitors.id, monitors)
        return monitors;
    }

    static findMonitors(offset: u32, limit: u32): Monitors[] {
        return allmonitors.values(offset, offset + limit)
    }

    static findMonitorsbyId(id: u32): Monitors {
        return allmonitors.getSome(id);
    }



}

/* Monitors End */

