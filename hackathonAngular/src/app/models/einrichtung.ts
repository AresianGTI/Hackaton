import { from } from "rxjs";
import { Iazubi } from "./azubi";

// import { azubi } from "./azubi";

export interface Ieinrichtung{
    name: string;
    id: string;

}

 export class einrichtung implements Ieinrichtung{
    name: string;
    id: string;

}
    
// class azubi2 implements Iazubi{
//     name: string;
//     vorname: string;
//     stammeinrichtung: string;
//     id: number;
    
// }