import mongoose from "mongoose";
import express from "express";
import { names } from "./models/employee.js";



let a = mongoose.connect("mongodb://localhost:27017/Company")


const app = express()
const port = 3000


let namerandom  = [
  "Akira", "Nikolai", "Mei", "Santiago", "Amina", "Youssef", "Ingrid", "Rajesh", "Anya", "Zhen",
  "Luca", "Fatima", "Bjorn", "Naoko", "Mateo", "Sofia", "Hassan", "Irina", "Chen", "Manuel",
  "Tariq", "Isla", "Ivan", "Noor", "Leandro", "Mira", "Omar", "Giulia", "Ren", "Yara",
  "Artem", "Priya", "Dimitri", "Aya", "Tobias", "Rania", "Jin", "Alejandro", "Lina", "Zara",
  "Mohammed", "Alina", "Ravi", "Elif", "Andrei", "Amira", "Kenji", "Lucia", "Ali", "Chiara",
  "Thiago", "Keiko", "Ziad", "Nina", "Emir", "Kavya", "Ibrahim", "Aiko", "Fernando", "Saida",
  "Hiroshi", "Daria", "Rashid", "Eleni", "Masaru", "Yulia", "Hamza", "Lale", "Jun", "Soraya",
  "Diego", "Malika", "Takeshi", "Anastasia", "Carlos", "Selin", "Ismail", "Riko", "Viktor", "Yasmine",
  "Hyeon", "Sahar", "Oussama", "Haruka", "Alvaro", "Tania", "Sayed", "Hanako", "Javier", "Leila",
  "Arjun", "Carmen", "Minho", "Noura", "Sven", "Farah", "Ryu", "Monika", "Pedro", "Loubna"
];


let langrandom = [
  "Python",
  "JavaScript",
  "Java",
  "C#",
  "C++",
  "TypeScript",
  "Go",
  "C",
  "Ruby",
  "Rust"
];
let cityrandom = [
  "New York", "Tokyo", "Paris", "London", "Dubai", "Singapore", "Los Angeles", "Rome", "Berlin", "Toronto",
  "Barcelona", "Sydney", "Seoul", "Amsterdam", "Bangkok", "Moscow", "Istanbul", "Chicago", "San Francisco", "Mumbai",
  "Hong Kong", "Madrid", "Lisbon", "Buenos Aires", "Cairo", "Dublin", "Beijing", "Vienna", "Kuala Lumpur", "Prague",
  "Cape Town", "Brussels", "Melbourne", "Jakarta", "Doha", "Warsaw", "Oslo", "Helsinki", "Stockholm", "Athens",
  "Budapest", "Lima", "Copenhagen", "Riyadh", "Manila", "Tehran", "Zurich", "Karachi", "Nairobi", "Bangalore"
];


app.use(express.static("public"));


app.get('/', (req, res) => {
   res.sendFile('index.html', {root:'public'})
})


app.post('/generate',  async(req, res) => {
 await names.deleteMany({})

 let Alldata = []

 for (let index = 0; index < 10; index++) {
  const element1 = namerandom[Math.floor(Math.random()*namerandom.length)];
  const element2 = langrandom[Math.floor(Math.random()*langrandom.length)];
  const element3 =cityrandom[ Math.floor(Math.random()*cityrandom.length)];
  
  
  let data = new names(
    { name: element1, 
      salary: Math.floor(200000*Math.random()) +" LPA", 
      language:element2, 
      city:element3 , 
      isManager: Math.random()<0.5? true : false})
      
      await data.save()
      Alldata.push(data)
      
    }
    res.json(Alldata)
  })
  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
