# Forms & APIs _(120 mins)_

## Objectives
_These objectives are crafted using [Bloom's Taxonomy](https://tips.uark.edu/using-blooms-taxonomy/) \
Please refer to [this action verb list](https://tips.uark.edu/blooms-taxonomy-verb-chart/) when adding or updating objectives_
- Create websites that take user input and change accordingly
- Create websites that consume data from external APIs


## Forms_(45 mins)_
**Anatomy of a Form** _(15 mins)_
- [ ] :speaking_head: Tell students that we can use forms to collect information from our users
- [ ] :grey_question: Ask students what HTML tag they think we could use to start a form _(`form`!)_
- [ ] :speaking_head: Tell students that our form is going to need some inputs
- [ ] :computer: Show students an `input` tag eg. `<input type="text" /> and how it renders
- [ ] :grey_question: Ask students what type of tag this is _(self closing)_
- [ ] :grey_question: Ask students what other kinds of input we might want to have
- [ ] :computer: Show students what happens when you change the `type` attribute to eg. `password`, `checkbox`, `number`, `color`
- [ ] :computer: Show students the [W3 `type` docs](https://www.w3schools.com/tags/att_input_type.asp) list of types
- [ ] :computer: Show students the `submit` type and add it to your form
- [ ] :computer: Point out that our text input will not let us add a new line
- [ ] :computer: Show students a `textarea` tag eg. `<textarea rows="5" cols="30"></textarea>` pointing out that it is not self closing

**More attributes** _(10 mins)_
- [ ] :speaking_head: Tell students that there are more attributes that `input` tags can take
- [ ] :computer: Show students the [W3 `input` docs](https://www.w3schools.com/tags/tag_input.asp) list of attributes
- [ ] :computer: Show students some attributes at work eg. `placeholder`, `required`,  `disabled`, `checked` 
- [ ] :computer: Add a `value` to your submit input of eg. `value="Do the thing!"`
- [ ] :speaking_head: Tell students that giving a `name` to your inputs is going to be extremely helpful for a number of things
- [ ] :computer: Add `name` attributes to all your inputs

**labels** _(5 mins)_
- [ ] :speaking_head: Tell students that it would be good to have some labels for our inputs
- [ ] :exclamation: Advise students that even if they don't want to add them, labels are important for accessibility so do it anyway!
- [ ] :speaking_head: Tell students that rather than just placing a div/span etc near an input, we can use the `label` tag
- [ ] :computer: Show students a `label` tag eg. `<label for="firstName">First Name</label> 
- [ ] :computer: Add an id of 'firstName' to one of your inputs and show students how clicking on that label focuses the input

**Submitting a Form** _(15 mins)_
- [ ] :speaking_head: Tell students that one way of defining what will happen when the form is submitted is to define the 'action' attribute on the form
- [ ] :speaking_head: Tell students we usually use this if we want to point to another page for the form processing
- [ ] :computer: Make a basic `/thankyou` page and point the action there
- [ ] :computer: Make an `updateHeader` function and change the action to `javascript:updateHeader()` citing this as an option
- [ ] :exclamation: Advise students that the support for `javascript:` in action is a bit patchy and not common practice
- [ ] :speaking_head: Tell students we can alternatively add an event listener to the form, listening for the 'submit' event
- [ ] :computer: Have students navigate you adding a listener to the form submit that logs a message
- [ ] :speaking_head: Remove the form's `action` and students that we will use just the one page for this and update the content using just JavaScript
- [ ] :computer: Submit the form and acknowledge that the page has refreshed!
- [ ] :grey_question: Ask students if they know why this has happened _(default event behaviour)_
- [ ] :speaking_head: Tell students that we can intercept this if we have access to the event object
- [ ] :grey_question: Ask students if they remember how we accessed an event object before _(passed it to the listener function)_
- [ ] :computer: Pass the event to the callback and log it, looking at some of the properties and finding `preventDefault`
- [ ] :computer: Invoke preventDefault in your cb and submit the form again, noting that it no longer tries to refresh
- [ ] :computer: Update your cb to do something more interesting on form submission such as updating the header to the user's input 

---

## Testing Forms _(10 mins)_

**Stubbing the event object**
- [ ] :speaking_head: Have students recall how we tested functions that received an event object earlier
- [ ] :speaking_head: Remind students that we don't need to stub the whole object, just the bits we need
- [ ] :computer: Identify the properties of the event object you'll need - probably `preventDefault` and `target` with input(s)
- [ ] :speaking_head: Tell students that we are not testing the functionality of the preventDefault, just giving our function something to invoke
- [ ] :computer: Create a stub eg. `eventStub = { preventDefault: () => {}, target: { firstName: "Bob" } }`
- [ ] :speaking_head: Tell students that we could also assign preventDefault to `jest.fn` and we will talk more about making use of these jest functions later in the course
- [ ] :computer: Write a test for your listener function using the stub

---

## Break _(5 mins)_

---

## APIs _(topic timing eg. 20 mins)_

:question: **What is an API?** \ _(5 mins)_
**A**: Appliction Programming Interface - to send and receive data
- [ ] :speaking_head: Tell students there are thousands of API’s out there that allow us to retrieve and use data from other service
- [ ] :computer: Show students the GitHub list of [Public APIs](https://github.com/public-apis/public-apis) as a sample - point out there is an API for these APIs!
- [ ] :exclamation: Tell students that we will soon be making our own APIs but today we will use the GitHub one
- [ ] :computer: Show students the[GitHub REST API](https://docs.github.com/en/rest) docs and locate the GET user/username endpoint _(Reference > Users (scroll > Get a user))_
- [ ] :computer: Visit the endpoint in the browser using your GitHub username or getfutureproof eg. `https://api.github.com/users/getfutureproof`
- [ ] :grey_question: Ask student what data type they think this is _(JSON)_
- [ ] :speaking_head: Tell students that our goal is to have a user submit their GH username in our form, fetch this data and then show some of it on our site
- [ ] :computer: Revisit the docs and acknowledge the `octokit` library mentioning that it is a useful wrapper but a bit heavy handed for our needs today


**fetch** _(15 mins)_
- [ ] :speaking_head: Tell students that our browser has access to the Fetch API - Google this and take a quick look at the MDN docs
- [ ] :exclamation: Advise students that this is a Web API and we cannot access it directly outside of the browser
- [ ] :computer: In dev tools, run `fetch('https://api.github.com/users/getfutureproof')` and take a look at the return value
- [ ] :exclamation: Advise students that we will look much deeper into Promises in next session
- [ ] :speaking_head: Tell students that we need to wait for this Promise to be resolved which will indicate that data has been received
- [ ] :computer: Show students a `.then` chain and log out the Response
- [ ] :speaking_head: Tell students that this response has good information but we need to extract the JSON from it
- [ ] :speaking_head: Tell students that we will use the `.json` method on this Response 
- [ ] :computer: Log out the return of `.json` _(`fetch('https://api.github.com/users/getfutureproof').then(r => r.json())`)_ pointing out that it, too returns a Promise!
- [ ] :computer: Add another `.then` chain and log the result showing that we've finally found it!
- [ ] :computer: Move your code into a function in your local files and update it to log out a value from the data
- [ ] :computer: Have students navigate you on triggering this on the submit event (always getting `getfutureproof`)
- [ ] :computer: Have students navigate you on updating this to dynamically get different users
- [ ] :computer: Have students navigate you on having this update the page to show a piece of the received data

**fetch errors** _(10 mins)_
- [ ] :computer: Update the url to mispell 'github'
- [ ] :speaking_head: Tell students that a request may throw an error for many reasons - a misspelling, the API is down etc. etc.
- [ ] :computer: Show students how to add a `.catch` and log the error in a friendlier way!
- [ ] :exclamation: If students mention async/await, assure them that we will cover it in the next session but don't go into it now
- [ ] :computer: Have students navigate you through adding a red banner to the page if an error is thrown
- [ ] :computer: Add an 'x' close button to the banner and add code to close it

**axios** _(10 mins)_
- [ ] :speaking_head: Tell students that there are various libraries that provide alternatives to using `fetch` and these can also be used outside of the browser
- [ ] :computer: Show students the [axios docs](https://github.com/axios/axios/blob/master/README.md)
- [ ] :computer: Bring in axios via CDN
- [ ] :computer: Use the axios docs to make alternative versions of your fetch requests eg. `axios.get('https://api.github.com/users/getfutureproof')`
- [ ] :speaking_head: Point out that the extraction of the JSON is included in the `axios.get` method so can look a bit cleaner

---

## Testing Endpoints and Requests _(30 mins)_
**Hoppscotch** _(5 mins)_
- [ ] :speaking_head: Tell students that we may just need a quick way to check if an endpoint is returning what we want
- [ ] :speaking_head: Tell students that whilst we did this in dev tools before, it can get a bit more complicated with other types of request and writing out the whole request can get tiresome!
- [ ] :computer: Show students [Hoppscotch](https://hoppscotch.io/) and use it to hit the same GitHub endpoint
- [ ] :exclamation: Tell students that this is actually a really simple version of this type of tool!
- [ ] :exclamation: Advise students that if and when they need more features to help with testing and documenting APIs, [Postman](https://www.postman.com/) is a great option to look into

**Mocking fetch** _(20 mins)_
- [ ] :speaking_head: Tell students that we will add a test to our function which makes the fetch request
- [ ] :speaking_head: Remind students that we don't have access to the Fetch Web API outside of the browser and as such we will have a problem when running our tests
- [ ] :exclamation: Explain that even if we did have access to fetch, we don't really want to be making real requests as the API we hit may have limits or costs associated!
- [ ] :computer: Write a basic test that just invokes the function and note the error
- [ ] :speaking_head: Tell students that we will use a library called `jest-fetch-mock` but there are others (with confusingly similar names!)
- [ ] :computer: Install with `npm i -D jest-fetch-mock`
- [ ] :computer: In your test file, add `global.fetch = require('jest-fetch-mock')` and ask students what they think this is doing
- [ ] :computer: Run the test again and note the output
- [ ] :speaking_head: Tell students that we will want to stub out some potential results to accurately test various outcomes
- [ ] :computer: Stub a test of `'it makes a fetch call to the given user\'s github api url'` and ask students what we might assert, guiding them to 'does it call fetch with the right url'
- [ ] :computer: Invoke the function with `getfutureproof` and add `expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/gingertonic')`
- [ ] :exclamation: Explain that we can use `toHaveBeenCalledWith` because this is a mock of fetch, not the real fetch - we couldn't do that with the real one!
- [ ] :grey_question: Ask students if the response value of `fetch` matters in that test _(no)_
- [ ] :computer: Stub a test of 'it returns the user\'s repo count on a successful request'
- [ ] :grey_question: Ask students if the response value of `fetch` matters in that test _(yes)_
- [ ] :computer: Add `fetch.mockResponseOnce(JSON.stringify({ "public_repos": 100 }))` to the test and ask students what they think it is doing
- [ ] :computer: Stub a test of 'it returns an error message on an unsuccessful request'
- [ ] :computer: Add `fetch.mockReject(new Error('Fake disaster'))` to the test and ask students what they think it is doing


**Mocking axios & other libraries** _(5 mins)_
- [ ] :exclamation: Tell students that we can also mock `axios` (and any other library we have installed) with `jest.mock` which we will at more soon
- [ ] :exclamation: Advise students that it is worth practicing use fetch and jest-fetch-mock for now but they can use documentation if they want to visit this early

---

## Questions _(5 mins)_
