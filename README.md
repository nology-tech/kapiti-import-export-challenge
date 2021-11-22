# kapiti-import-export-challenge
A mini challenge looking at import and export syntax in JS. 

## Set-up

To get this project on your machine follow the steps below.

Clone the repo
```bash
git clone https://github.com/nology-tech/kapiti-import-export-challenge.git
cd kapiti-import-export-challenge
code .
```

To change branch.
```bash
git checkout name-of-branch 
```

## Branches

- main - The initial challenge
- extension - The extension challenge


## Brief

This a mini project to get you use to using import and export syntax. 

Your brief is to make a basic UI / display for the data given. Focus on functionality first with very basic styles. You need to have the data provided in its own data folder.
I want you to then bring it into the main.js as a default import. In the main.js I want you to iterate through and get each of the objects onto the index.html.

Each of the food html items should match the html below with the placeholder's replaced for the values from each of the objects.

```html
<div>  
  <p>FOOD-IMG</p>
  <p>FOOD-NAME</p>
  <p>FOOD-PRICE</p>
</div>`;
```

#### Project Structure

The project structure should match below. 
```
├── index.html
├── styles.css
├── data                   
│   └── data.js             # The data file 
└── main.js                 # The JS file that uses it
```
### Gotcha's 

- `type=module`??
- [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)


### Data

```js
// data/data.js
const foodStock = [
  { img: "🍕", name: "pizza", foodType: "junk", price: 2.5 },
  { img: "🍔", name: "burger", foodType: "junk", price: 3 },
  { img: "🍟", name: "fries", foodType: "junk", price: 1 },
  { img: "🌭", name: "hot dog", foodType: "junk", price: "1.5" },
  { img: "🥗", name: "salad", foodType: "healthy", price: [2] },
  { img: "🥙", name: "pita", foodType: "healthy", price: 0 },
  { img: "🥪", name: "sandwich", foodType: "healthy", price: 3 },
  { img: "🌯", name: "burrito", foodType: "healthy", price: 5 },
  { img: "🥣", name: "soup", foodType: "healthy", price: 2 },
];
export default foodStock;
```

---
## EXTENSION Brief

This is optional, I want you to have a utilities file with in a utilities folder. This is going to hold a function that takes a array of food opjects, iterates through them and creates an array that matches the HTML above.
I want you to use a named import for the function.
This means your main.js should only import the data and that function. It will use both to get the items on the screen.

#### Project Structure

The extension project structure should match below. 
```
├── index.html
├── styles.css
├── data                   
│   └── data.js             # The data file below
├── utilities                   
│   └── utilities.js        # The functions you use in the project
└── main.js
```
---