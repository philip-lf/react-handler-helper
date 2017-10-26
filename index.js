let newState = {}

export function helper(state, event) {
    Object.keys(state).map(key => {
        newState[key] = event.target.name === key ? event.target.value : state[key]
    })
}

export default newState

/////////////////////////////////////////////////

import React, { Component } from 'react'

let newState = {}

// acts as a reducer
// requires state object and event from each input
export function helper(state, event) {
    console.log(event.target.name, event.target.value)
    Object.keys(state).map(key => {
        newState[key] = event.target.name === key ? event.target.value : state[key]
    })
}

export default newState

//get access to each input and select and places value & onChange attributes
export function eachInput(document, state, setState) {
    let allInputs = Array.from(document.getElementsByTagName('input'))
    
    allInputs.map(input => {
        let nameAttribute = input.getAttribute('name') // "first"
        input.setAttribute('value', state[nameAttribute]) // value={}
        input.setAttribute('onChange','e => {helper(state, e); setState(newState)}') // onChange={}
        console.log("dog", input)
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
