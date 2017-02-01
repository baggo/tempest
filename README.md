# Tempest
> Micro templating engine and [Pixie](https://github.com/jamen/pixie)'s little brother

Tempest is a micro ([>40 LOC](./index.js)) template engine based around arrays and strings. You compile templates with a double mustache syntax.

```js
var tempest = require('tempest')

// Parse a template:
var template = tempest('fu {{man}} chu')

// Compile (using simple default):
tempest.compile(template, { man: 'MAN' })
// => 'fu MAN chu'

// Render if you're lazy:
tempest.render('{{fu}} man {{chu}}', { fu: 'FU', chu: 'CHU' })
// => 'FU man CHU'
```

## Installation

```sh
$ npm i -s tempest
```

## Usage

<a name='tempest'></a>
### `tempest(source)`

Parse the source into a [template](#structure). This is passed off to a `compile` (e.g. [`tempest.compile`](#tempest_compile)).

- `source` (`String`): The template string source being parsed.

```js
// Parse:
tempest('Hello {{world}} foo {{bar}} baz.')
```

<a name='tempest_compile'></a>
### `tempest.compile(template, data)`

A simple compiler, substitutes properties from an object by name.

```js
// Parse a template:
var template = tempest('foo {{bar}} baz {{qux}}')

// Compile template:
tempest.compile(template, { bar: 'BAR', qux: 'QUX' })
// => 'foo BAR baz QUX'
```

<a name='tempest_render'>
### `tempest.render(source, data)`

A combination of `tempest` and `tempest.compile` if you do not plan to reuse the template.

```js
tempest.render('Hello {{world}}!', { world: 'Mars' })
// => 'Hello Mars!'
```

<a name='structure'></a>
### Template structure

The template structure is an array, containing two other arrays recognized as `[partials, expression]`

- **Expressions**: Data between the opening and closing points. In `foo{{bar}}baz{{qux}}` they would be `['bar', 'qux']`
- **Partials**: Data around your expressions. In the same example, the partials would be `['foo', 'baz', '']`

Compilers can choose to interpret and compile these however they choose. The one `tempest` provides is just a simple point and place.

## License

MIT © [Baggo](https://git.io/baggo)
