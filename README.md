# Hei Yuki Tiny Planet (hytinyplanet)

This is a very small module that applies a Tiny Planet Effect on a 360 Image and exports it in a file.

## Quick Start

```bash
npm install hytinyplanet
```

You then easily require the module:

```javascript
const hytiny = require('hytinyplanet');
```

## How to Use

```javascript
const hytiny = require('hytinyplanet');

hytiny.TinyPlanetToFile('PATH_TO_IMAGE', 'PATH_TO_OUTPUT').then(() => {
    //Logic after you export the Image
    //you can for example import it 
    //To do more operations on it 
    //using other libraries
}, (err) => {
    console.log("An Error has Occured In Module Tiny Planet");
    console.log(err);
    // This should be enough to locate the problem
});

```



## Test The Module
You can of corse test the module. Our tests are written with just MochaJS.
We also have included a test Image within our test files.
```bash
npm test
```

## License
MIT [heiyukidev](https://github.com/heiyukidev)

## About the Author
I'm Khaled Romdhane but mostly known as heiyuki.
My handle is : [@heiyukidev](https://github.com/heiyukidev).

I Work at this amazing Company [@redcarpetsolutions](https://github.com/redcarpetsolutions) don't hesitate to go check us out.
