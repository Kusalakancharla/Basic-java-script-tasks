let users=[
    
   {id: 1, name: "A", age: 25 },
    { id: 2, name: "B", age: 30 },
    { id: 3, name: "C", age: 22 },
];
const useridToUpdate=2;
const Newage= 35;
let userupdated=false;
for(let i=0;i<=users.length-1;i++){
    if (users[i].id == useridToUpdate){
        users[i].age= Newage;
        userupdated=true;
    }}
    if(userupdated){
          console.log("user age updated successfully");
          console.log(users);
    }else{

    }
    console.log("user is not found.Cannot update age.");
    






       
    