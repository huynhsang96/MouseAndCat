class Mouse{
    constructor(Name, Weight, Speed, Status){
        this.Name = Name;
        this.Weight = Weight;
        this.Speed = Speed;
        this.Status = true;
    }

    behavior(voice){
        console.log(`${this.Name} ${voice}`)
    }

}

