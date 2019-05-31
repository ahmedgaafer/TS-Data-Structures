/*
Implemented by Ahmed Gaafer 5/4/2019 11:00PM
*/

//Notes:
/*
    1- this is an implemnteion of queue data structure
    2- any variable or method that starts with '-' is private please do not try to minpulate it.
    3- this implemntation is not final it will be inhanced when ever i see a problem or a faster solution.
*/ 
class queue{

    constructor(){
        //Should be treaded as private members
        this._count = 0;
        this._Data  = [];
    }

    enqueue(item)
    {
        this._Data.push(item);
        this._count = this._count + 1;
    }

    dequeue()
    {
        let ret = this._Data[0];

        for(let i=0; i < this.Count() ;i++)
        {
        this._Data[i] = this._Data[i+1];
        }

        this._count = this._count - 1;
        return ret;
    }

    Count(){
        return this._count;
    }

    View()
    {
        for(let i =0 ;i<this.Count();i++)
        {
            console.log(this._Data[i]+" ");
        }
        console.log("\n");
    }
}