# ember-normalize

Easily add [normalize.css][normalize] to your ember-cli app.

## Usage

### Dynamic Styles (SCSS, LESS, etc)

```scss
// app/styles/app.scss

@import "normalize";
```

### Static CSS

```css
/* app/styles/app.css */

@import "normalize.css";
```

## Installation

If you're using ember-cli v0.2.3+:

```no-highlight
ember install ember-normalize
```

If you're using ember-cli v0.1.5 - v0.2.2:

```no-highlight
ember install:addon ember-normalize
```

If you're using an older version of ember-cli:

```no-highlight
npm install ember-normalize --save-dev
ember generate ember-normalize
```

[bower]: http://bower.io "bower"
[normalize]: https://github.com/necolas/normalize.css/ "normalize.css"
