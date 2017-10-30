let newState = {}

// acts as a reducer
export function helper(event, state) {
    console.log("helper function:", event.target.name, event.target.value)
    Object.keys(state).map(key => {
        newState[key] = event.target.name === key ? event.target.value : state[key]
    })
}

export default newState

export function eachInput(document, state) {
    let allInputs = Array.from(document.getElementsByTagName('input'))
    
    allInputs.forEach(input => {
        // capture name attribute
        let nameAttribute = input.getAttribute('name')
        // make and set value attribute with even.target.value
        input.setAttribute('value', state[nameAttribute])
    })
}

// ***IMPORTANT***

//GOAL:
    // make a persistent form without:
        // handler functions / binding
        // value attribute
        // onChange attribute

// PROS:
    // does not require to be binded
    // no unique function to be created 
    // allows for less mistakes 

// CONS:
    // requires state key name to equal the name of the input
