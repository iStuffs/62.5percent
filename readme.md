# 62.5percent

62.5 is an easy way to use rem with no math complication.

## What it does

The browser set the default font size to 16px, but it's not convenient for rem unit use.
So we take 62.5% of 16px to have a font size base at 10px.
Now you can set size in rem with a 10 base maths.
_Example: 2.4rem is 24px._

**It only adds the following code to your css**

```css
html {
  font-size: .625em;
  font-size: calc(1em * .625);
}
```

Now you can use rem easily with low maths.

## Use with CDN

You can simply add this before your own stylesheet.

```html
  <link rel="stylesheet" href="//unpkg.com/62.5percent@latest">
```

## Import with eyeglass or NPM

**With eyeglass**

```bash
npm i -D eyeglass
npm i -S 62.5percent
```

```javascript
/* gulpfile.js */
const gulp     = require('gulp');
const sass     = require('gulp-sass');
const eyeglass = require("eyeglass");

gulp.task('css', function () {
    return gulp.src('sass/**/*.{sass,scss}')
        .pipe(sass(eyeglass())
        .pipe(gulp.dest('./dist/css/')
    );
});
```
**_or_ With NPM**
```bash
npm i -S 62.5percent
```

```javascript
/* gulpfile.js */
const css625 = require("62.5percent").includePaths;

gulp.task('cssTask', function () {
  return gulp.src(PATH.css.src)
  .pipe(sass(
    { includePaths: [css625] }
  ).on('error', sass.logError))
  // ...
  .pipe(gulp.dest(PATH.css.dest));
});
```

## easy use
```scss
@import '62.5percent';

body {
    font-size: 1.4rem; // equivalent to 14px
    @media screen and (min-width: 76.8rem) { // equivalent to 768px
        font-size: 1.5rem; // equivalent to 15px
    }
    @media screen and (min-width: 99.2rem) { // equivalent to 992px
        font-size: 1.6rem; // equivalent to 16px
    }
}
```
