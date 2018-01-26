# michelle-generic-react-components

An NPM package with two basic react components.

## Usage

Start by running `npm install michelle-generic-react-components`. Then, in the React file where you wish to use these components:

```js
import {InformationDisplayer, CreateOneItemForm} from 'michelle-generic-react-components';

// somewhere in a render function...
  <InformationDisplayer information="data to be displayed" />
  <CreateOneItemForm
    inputName="name-of-form-input-for-submission"
    submitURL="https://your-submit-url-here.com/things"
    afterSubmitted={ (responseData) => console.log(responseData)}
  />

```

## Demo App

Find a working demo app [here](https://github.com/mnfmnfm/demo-generic-react-components).

## Documentation

### InformationDisplayer component

This component displays a piece of information on the page. It takes in one prop, the piece of information to be displayed.

##### Props

- `information` (string) **(required)**: the information to be displayed.

### CreateOneItemForm component

This component displays a form with a single input and a submit button. When the user clicks the submit button, a POST request is sent to the provided URL, and the response data is passed as an argument to the afterSubmitted callback.

##### Props
- `inputName` (string) **required**: the name of the single form input to be sent as the key in the request to the backend.
- `submitURL` (string) **required**: the URL at which to POST data.
- `afterSubmitted` (function) **required**: a callback to be executed after the new data has been posted to the server.
