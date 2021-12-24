const readline=require("readline");
const EventEmiter=require('events');
const eventEmiter=new EventEmiter;

const r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
let books=["Little Happiness","Fear Not:Be Strong","The Secret","Wings of fire","The Alchemist"]
function showBooks(){
   for(let i=0;i<books.length;i++)
   {
       console.log(i+1,books[i])
       if(i==books.length-1)
       {
           console.log("-------------")
       }
   }
}

function User(){
    r1.question("Press 1 to see books// Press 2 to add book// Press 3 to Exit\n ",
    (selectedOption)=>{
     eventEmiter.on('show books pressed',showBooks);
     if(selectedOption==="1"){
         
         eventEmiter.emit('show books pressed')
        eventEmiter.removeListener('show books pressed',showBooks)
         User()
     }
     else if(selectedOption=="2"){
         r1.question('Please provide name of the book which you want to add--',(bookname)=>{
           books.push(bookname)
           eventEmiter.emit('show books pressed')
           eventEmiter.removeListener('show books pressed',showBooks)
           User()
         })
        }
     else if(selectedOption=="3"){
     r1.question("Are you sure you want to quit - press Y to quit--",(check)=>{
         if(check=="Y")
         {
             r1.close()
         }
         else {
             console.log("Incorrect Input")
             User()
         }
     })
     }
     else
     {
         console.log("You have selected an invalid entry so please press 1, 2 or 3")
         User()
     }

    }
    );
}
r1.on('close',()=>{
    console.log("Bye Bye");
})
User()
