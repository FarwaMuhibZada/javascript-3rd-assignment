// introdution to objects

let myCountry = {
    country :'afghanistan',
    capital :'kabul',
    language: 'pashto',
    population : 40,
    neighbors : ['pakistan','iran','uzbakistan'],

    describe:function(){
        console.log(`${this.country} has ${this.population} million finish speaking people,${this.neighbors.length}
        neighboring countries and capital called ${this.capital}`); 
    },


    checkIsland:function(){
        this.isIsland = this.neighbors.length === 0? ture:false;
    }
}
//brakets &notation
console.log(`${myCountry.country} has ${myCountry.population} million finish speaking people,${myCountry.neighbors.length}
 neighboring countries and capital called ${myCountry.capital}`);


 myCountry.population += 2;
//  myCountry[population] +=2;   this will though an error................
//increse pupolation by 2
 console.log(myCountry.population)




// call the descibe method
 myCountry.describe();
 myCountry.checkIsland();

//  iteration for loop

for(let i =1;i<=50;i++){
    console.log(`voter number ${i} currently voting..`);
}


// looping array breaking and contenue



// const populations = [1200,1400,1100,1000];
// const percentages =[];

// for( const population of populations){
//         const percentage = (population/7900)*100;
//         percentages.push(percentage);
// }

// console.log(percentages);

//  looping backwards and loop in loop

 let listOfNeighbours =[['Canada','Maxico'],
                       ['spain'],
                       ['Norway','sweden','russia']];
   for(let countries of listOfNeighbours ){
    for( let country of countries){
        console.log(`Neighbour:${country}`);
    }
   } 
   
   


   //while loop
   

  const populations = [1200,1400,1100,1000];
   let  percentage3 =[];
   let total = 0;
   while(total<=populations.length){
    const percentage = (populations/7900)*100;
    percentage3.push(percentage);
          ++total;
   }


    console.log(percentage3);



