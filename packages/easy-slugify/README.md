# easy-slugify

A lightweight, fast, and dependency-free TypeScript library to convert any string into a URL-friendly slug. Designed for publishing to npm and compatible with ESM and CommonJS.

## Features

- **Lowercase conversion**: Turns all uppercase letters to lowercase.
- **Whitespace trimming**: Removes accidental spaces at the very beginning or end of the string.
- **Special character removal**: Strips out punctuation and special symbols (like `!`, `?`, `.`, `,`, `@`).
- **Space replacement**: Replaces spaces between words with a hyphen (`-`).
- **Duplicate space handling**: Ensures that duplicate spaces only output a single hyphen (e.g., `"hello  world"` becomes `"hello-world"`).
- **TypeScript Support**: Full type safety and declaration files included.

## Installation

Install using your preferred package manager:

```bash
# Using npm
npm install easy-slugify

# Using pnpm
pnpm add easy-slugify

# Using yarn
yarn add easy-slugify
```

## Usage

### ES Modules (ESM)

```typescript
import { slugify } from 'easy-slugify';

console.log(slugify('Hello, World!')); 
// Output: 'hello-world'

console.log(slugify('  My Awesome   Product!  ')); 
// Output: 'my-awesome-product'
```

### CommonJS (CJS)

```javascript
const { slugify } = require('easy-slugify');

console.log(slugify('Hello, World!')); 
// Output: 'hello-world'
```

## API

### `slugify(str: string): string`

Converts a string into a URL-friendly slug.

#### Parameters
- `str` (`string`): The input string to slugify. Must be a string.

#### Returns
- `string`: The slugified string.

#### Throws
- `TypeError`: If the input parameter is not a string.

## License

MIT
