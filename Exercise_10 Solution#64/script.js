let rand = Math.random()
        let first, second,third;
        // 0 0.33 0.66 1
        // First 

        if (rand < 0.33){
            first = "crazy"
        }
        else if(rand < 0.66 && rand >= 0.33){
            first = "amazing"
        }
        else{
            first = "Fire"
        }

        // second 
        if (rand < 0.33){

            second = "Engine"
        }
        else if(rand < 0.66 && rand >= 0.33){
            second = "Foods"
        }
        else{
            second = "Garments"
        }

        // Third
        if (rand < 0.33){

            third = "Bros"
        }
        else if(rand < 0.66 && rand >= 0.33){
            third = "Limited"
        }
        else{
            third = "Hub"
        }
        console.log(`${first} ${second} ${third}`)