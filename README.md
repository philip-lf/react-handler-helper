# react-form-persistence

A more readible way to have controlled components where the value attribute is not required and the onChange attribute is added to the form tag instead of each input tag.

- There is no need to define handler functions for each input to keep the value persistent with the state. With no functions also means no binding the functions to the constructor. 

**Note:** The state keys ***must*** match the names of each input 

## Example Usage

```js
var newState, {helper, eachInput} = require('react-form-persistence');
```

```js
    render() {
        eachInput(document, this.state) 
        return (
            <div className="forms">
              <form 
                onSubmit={this.props.handleSubmit} 
                onChange={e => {helper(e,this.state); this.setState(newState)}}>
                    <div className="form-group">
                        <input type="text" placeholder="first name" name="first"/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" placeholder="last name" name="last"/>
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="text" placeholder="email address" name="email"/>
                    </div>

                    <button type="submit" className="btn btn-default">
                        SUBMIT
                    </button>
                </form>
            </div>
        )
    }
}
```


state names must equal input names
PROS:
    does not require to be binded
    no unique function to be created 
    allows for less mistakes 

import newState, { handlerHelper } from './handlerHelper'

onChange={e => {helper(this.state,e); this.setState(newState)}}