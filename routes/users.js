import express from 'express'
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users =
[]
    

router.get("/" , (req, res) => {
     console.log("here you go");
     console.log(users);
    res.send(users);
});


router.post('/', (req, res) => {
console.log("post route reached");

const user = req.body;

users.push( {...user , id:uuidv4()} );

res.send(`user ${user.name} added`);
}); 



router.get("/:id" , (req, res) => {
        
        const {id} = req.params;

        const foundUser = users.find((user) => user.id==id);
       res.send(foundUser);
   });
   

   
router.delete("/:id" , (req, res) => {
        
        const {id} = req.params;

        users = users.filter((user) => user.id!=id);
       res.send(`user with ${id} got sworded`);
   });
   

   router.patch("/:id" , (req, res) => {
        
        const {id} = req.params;
        
        const { name , age } = req.body;

        const user = users.find((user) => user.id == id);
           
        if(name)user.name = name;     
         
        if(age)user.age = age;
        
       res.send(`user with ${id} updated details`);
   });

export default router;