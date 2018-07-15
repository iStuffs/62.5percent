# 62.5percent

62.5 is an easy way to use rem with no math complication.

## What it does

The browser set the default font size to 16px, but it's not convenient for rem unit use.
So we take 62.5% of 16px to have a font size base at 10px.
Now you can set size in rem with a 10 base maths.
2.4rem is 24px.

```css
html {
  font-size: .625em;
  font-size: calc(1em * .625);
}
```

You only have yo use rem easily with low maths.

```css
body {
    font-size: 1.4rem;
    @media screen and (min-width: 76.8rem) {
        font-size: 1.5rem;
    }
    @media screen and (min-width: 99.2rem) {
        font-size: 1.6rem;
    }
}
```

## Import with npm

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

```css
@import '62.5percent';

body {
    font-size: 1.4rem;
    @media screen and (min-width: 76.8rem) {
        font-size: 1.5rem;
    }
    @media screen and (min-width: 99.2rem) {
        font-size: 1.6rem;
    }
}
```
