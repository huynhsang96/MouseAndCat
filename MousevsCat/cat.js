class Cat{
    constructor(Name, Weight, Speed){
        this.Name = Name;
        this.Weight = Weight;
        this.Speed = Speed;
    }

    behavior(){
        
    }

    catchMouse(Mouse){
        return this.Speed > Mouse.Speed
    }

    eatMouse(Mouse){
        if(Mouse.status){
            this.Weight += Mouse.Weight;
            Mouse.Status = false;
        }else{
            console.log("Mouse Dead")
        }
        return this.Weight
    }

}