import { from } from "rxjs";
import { Iazubi } from "./azubi";

// import { azubi } from "./azubi";

export interface Ieinrichtung{
    name: string;
    id: number;

}

 export class einrichtung implements Ieinrichtung{
    name: string;
    id: number;

}

// class azubi2 implements Iazubi{
//     name: string;
//     vorname: string;
//     stammeinrichtung: string;
//     id: number;
    
// }