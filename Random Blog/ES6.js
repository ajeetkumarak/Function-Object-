console.log("this is to understanding ES6 classes & Inheritance");

class employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }
  slogan() {
    return `I am ${this.name} and this company is best for me`
  }

 JoiningYear() {
    return 2022 - this.experience;
 }

 static add(a, b) {
    return a + b;
 }
}
ajeet = new employee("Ajeet","20","1st");
ankit = new employee("Ankit","25","1st")
console.log(ajeet);
console.log(ajeet.slogan()) ;
console.log(ankit,ankit.slogan())

console.log(ajeet.JoiningYear())
console.log(ankit.JoiningYear())

console.log(employee.add(50, 123));





class Programmer extends employee {
    constructor(givenName, givenExperience, givenDivision, language, github) {
         super(givenName, givenExperience, givenDivision);
         this.language = language;
         this.github = github;
    }

     favoritelanguage(){
        if (this.language == 'python'){
            return 'python';
        }
        else{
            return'Javascript';
        }
    }

    static multiply(a, b) {
        return a*b;
    }
};

man = new Programmer('Bill gates',10,'Lays',"Go","jeetgithub")
console.log(man);
console.log(man.favoritelanguage());
console.log(Programmer.multiply(120, 201.5355))



console.log("........here we understand ASYNCHRONOUS PROGRAMMING....")

for (let index = 0; index < 45; index++) {
    const element = index;
    console.log('this is index number'+ index)
    
}
console.log("done printing...")



for (let index = 0; index < 4500; index++) {
    const element = index;
    console.log('this is index number'+ index)
    
}
console.log("done printing...")


// 
setTimeout(() => {
    for (let index = 0; index < 10000; index++) {
        const element = index;
        console.log('this is index number'+ index)
        
    }
}, 100);

console.log("done printing...")
