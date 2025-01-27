// For in and for of loops
//When it comes to iterating on objects for in and for of loops come in handy however its important to know their difference in functionality
//Lets create an object to understand the difference
const car={
    speed:100,
    color:'brown',
    model:2015,
    owner:'Man',
}
console.log(car)
//ok now let's try for of loop to iterate over the above object
/* for(j of car){
    console.log(j)
} */
//we got an erro because car object is not iterable
//Now we will try for in loop
console.log('using for in loop to iterate through the car object')

for(k in car){
    console.log(k,':',car[k])
}
//for in loop is iterating throgh the value
//there is one way to make for of loop give the same functionality by using objects.keys() method
console.log('Using object.keys method in For-of loop')
for(j of Object.keys(car)){
    console.log(j,':',car[j])
}
//Now we will try creating an object using the above prototype
const myCar=Object.create(car)
myCar.owner='John'
console.log('printing myCar object')
console.log(myCar)
//Here for-of and for-in loop have different behavior let's see
console.log('for in loop on myCar')
for(p in myCar){
    console.log(p,':',myCar[p])
}
//see for-in loop not only printed out all of the protype features
//now using for.of loop
console.log('for of loop on myCar')
for(pk of Object.keys(myCar)){
    console.log(pk,':',myCar[pk])
}
//here for of loop only printed out the value assigned and not the complete prototype