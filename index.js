// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, string){
    let result = drivers.filter(element => element.toLowerCase() === string.toLowerCase());
    return result
}


function fuzzyMatch(drivers, string) {
   let result = drivers.filter(word => word.startsWith(string))
   return result
} 

function matchName(drivers, string){
    let result = drivers.filter(element => element.name.match(string))
 return result
}


