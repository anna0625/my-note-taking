# CSS Notes

## Useful Links

* [codeguide](https://codeguide.co/#css-syntax)
* [css-tricks](https://css-tricks.com/)
* [colours](https://colours.neilorangepeel.com/)
* [palettes](https://coolors.co/palettes/trending)
* [contract colours](https://randoma11y.com/)
* [caniuse.com](https://caniuse.com/)

## Declaration Order

1. Positioning
2. Box model
3. Typographic
4. Visual
5. Misc

```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box-model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;

  /* Typography */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* Visual */
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 3px;

  /* Misc */
  opacity: 1;
}
```

## Useful Properties

### Flatbox properties

( from [a guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) )

#### Properties for the Parent (flex container)

* **display**

``` css
.container {
  display: flex | block | inline-flex | inline;
}
```

* **flex-direction** - defining the direction flex items are placed in the flex container.

``` css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

* **flex-wrap** - by defaluut, flex items will al try to fit onto one line. This allows the items to wrap as needed.

``` css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

* **flex-flow** - shorthand for the `flex-direction` and `flex-wrap`.

``` css
.container {
  flex-flow: column wrap;
}
```

* **justify-content** - defining the alignment along the main axis.

``` css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

* **align-items** - defining the default behavior for how items are laid out along the cross axis on the current line.

``` css
.container {
  align-items: center | flex-start | flex-end | stretch | baseline;
}
```

* **align-content** - similar to how `justify-content` aligns individual items within the main-axis.

``` css
.container {
  align-items: center | flex-start | flex-end | stretch | baseline;
}
```

##### Properties for the Children (flex items)

* **order** - by default, flex items are laid out in the source order. This property controls the order in which they appear in the flex container.

``` css
.item {
  order: 5; /* default is 0 */
}
```

* **flex-grow** - defining the ability for a flex item to grow if necessary. if all items have `flex-grow` set to `1`, the remaining space in the container will be distributed equally to all children.

``` css
.item {
  flex-grow: 1; /* default is 0 */
}
```

* **flex-shrink** - defining the ability for a flex item to shrink if necessary.

``` css
.item {
  flex-shrink: 3; /* default is 0 */
}
```

* **flex-basis** - defining the default size of an element before the remaining space is distributed.

``` css
.item {
  flex-basis: 5rem | 20% | auto; /* default is 0 */
}
```

* **flex** - shorthand for `flex-grow`, `flex-shrink` and `flex-basis` combined.

``` css
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

* **align-self** - this allows the default alignment (or the one specified by `align-items`) to be overriden for individual flex items.

``` css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

---

🤖 from _LinkedIn Learning_  & _DEV ED(Youtuber)_
