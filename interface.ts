interface Person { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 

var customer:Person = { 
   firstName:"Naren",
   lastName:"Karthik", 
   sayHi: ():string =>{return "Hi there  i am learning TypeScript"} 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

var employee:Person = { 
   firstName:"Narayanan",
   lastName:"Karthik", 
   sayHi: ():string =>{return "Hi i am Narayanan.K!!!"} 
} 
  
console.log("Employee Object ") 
console.log(employee.firstName) 
console.log(employee.lastName)