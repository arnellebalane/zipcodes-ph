# zipcodes-ph

[![Travis](https://img.shields.io/travis/arnellebalane/zipcodes-ph.svg)]([![Travis](https://img.shields.io/travis/rust-lang/rust.svg)](https://github.com/arnellebalane/zipcodes-ph))
[![Codecov](https://img.shields.io/codecov/c/github/arnellebalane/zipcodes-ph.svg)](https://github.com/arnellebalane/zipcodes-ph)
[![version](https://img.shields.io/npm/v/zipcodes-ph.svg)](https://github.com/arnellebalane/zipcodes-ph)
[![downloads](https://img.shields.io/npm/dw/zipcodes-ph.svg)](https://github.com/arnellebalane/zipcodes-ph)
[![license](https://img.shields.io/npm/l/zipcodes-ph.svg)](https://github.com/arnellebalane/zipcodes-ph)

Philippines zip code directory.

## Installation

Install via npm:

```bash
$ npm install --save zipcodes-ph
```

Browser builds are also available inside the `build` directory or in [unpkg.com](https://unpkg.com/zipcodes-ph@1.1.2/build/index.umd.js).

## Usage

NodeJS:

```js
const zipcodes = require('zipcodes-ph');

zipcodes.find(6000); // 'Cebu City'
zipcodes.reverse('Cebu City'); // 6000
```

Browser:

```html
<script src="path/to/zipcodes-ph/build/index.umd.min.js"></script>
```

```js
// global variable `zipcodesPH` is exposed

zipcodesPH.find(6000); // 'Cebu City'
zipcodesPH.reverse('Cebu City'); // 6000
```

## API

- **`find(zipcode)`**
  - `zipcode` _(Number|String)_: The zip code that will be resolved into a location name.
  - possible return values:
    - _String_ if one location with the zip code is found.
    - _Array_ if multiple locaitons with the zip code are found.
    - _null_ if no locations with the zip code are found.

- **`reverse(location)`**
  - `location` _(String)_: The name of the location that will be resolved into a zip code.
  - possible return values:
    - _Number_ if zip code for the location is found.
    - _null_ if zip code for the location is not found.


## License

MIT License
