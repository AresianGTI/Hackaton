export interface Iazubi{
    name: string;
    vorname: string;
    stammeinrichtung: string;
    // id: string;
}

export class azubi implements Iazubi{
    private _name: string;
    
    private _vorname: string;
    
    private _stammeinrichtung: string;
    
    private _id: string;


    constructor(){
        
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get vorname(): string {
        return this._vorname;
    }
    public set vorname(value: string) {
        this._vorname = value;
    }

    public get stammeinrichtung(): string {
        return this._stammeinrichtung;
    }
    public set stammeinrichtung(value: string) {
        this._stammeinrichtung = value;
    }

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }

}