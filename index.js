function justFood(people) {
    return `Catering od Just Food pro ${people} lidi za ${people*150}`
}
console.log(justFood(200))

function yourMama(people) {
    return `Catering od Your Mama pro ${people} lidi za ${people*250} `
}
console.log(yourMama(150))

function flavourHaven(people) {
    return `Catering od Flavour Haven pro ${people} lidi za ${people*500}`
}
console.log(flavourHaven(90))



function createEvent (eventName, people, functionEvent) {
    return `Událost ${eventName} s ${functionEvent(people)}`
}
console.log (createEvent('narozeniny Petry', 200, justFood))
console.log (createEvent('teambuilding Amazon', 500, flavourHaven))
console.log (createEvent('charitativni sbirka', 100, yourMama))