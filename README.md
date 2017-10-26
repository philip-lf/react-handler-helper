***IMPORTANT***
state names must equal input names
PROS:
    does not require to be binded
    no unique function to be created 
    allows for less mistakes 

import newState, { handlerHelper } from './handlerHelper'

onChange={e => {helper(this.state,e); this.setState(newState)}}