# DC/OS CSS Styleguide and Stylelint Configuration

This configuration extends [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard). The README is based off of [Airbnb's CSS styleguide](https://github.com/airbnb/css).

## Table of Contents

  1. [Terminology](#terminology)
    - [Rule Declaration](#rule-declaration)
    - [Selectors](#selectors)
    - [Properties](#properties)
  1. [Rules](#rules)
    - [Directory Structure](#directory-structure)
    - [Formatting](#formatting)
    - [Comments](#comments)
    - [Writing Useful Class Selectors](#writing-useful-class-selectors)
    - [Ordering](#ordering)
      - [Property declarations](#property-declarations)
      - [Pseudo-classes and pseudo-elements](#pseudo-classes-and-pseudo-elements)
      - [Nested selectors](#nested-selectors)
    - [Variables](#variables)
    - [Mixins](#mixins)
    - [Extend directive](#extend-directive)

## Terminology

### Rule declaration

A “rule declaration” is the name given to a selector (or a group of selectors) with an accompanying group of properties. Here's an example:

```css
.listing {
  font-size: 18px;
  line-height: 1.2;
}
```

### Selectors

In a rule declaration, “selectors” are the bits that determine which elements in the DOM tree will be styled by the defined properties. Selectors can match HTML elements, as well as an element's class, ID, or any of its attributes. Here are some examples of selectors:

```css
.my-element-class {
  /* ... */
}

[aria-hidden] {
  /* ... */
}
```

### Properties

Finally, properties are what give the selected elements of a rule declaration their style. Properties are key-value pairs, and a rule declaration can contain one or more property declarations. Property declarations look like this:

```css
/* some selector */ {
  background: #f1f1f1;
  color: #333;
}
```

## Rules

### Directory Structure

Stylesheets should follow the current organization where there is a `styles.less` and `variables.less` inside a parent directory which.

### Formatting

* Use soft tabs (2 spaces) for indentation
* Alphabetize properties in declarations
* Prefer dashes over camelCasing in class names.
* Do not use ID selectors
* When using multiple selectors in a rule declaration, give each selector its own line.
* Put a space before the opening brace `{` in rule declarations
* In properties, put a space after, but not before, the `:` character.
* Put closing braces `}` of rule declarations on a new line
* Put blank lines between rule declarations

**Bad**
```less
.avatar{
    border-radius:50%;
    border:2px solid white; }
.no, .nope, .not_good {
    // ...
}
#lol-no {
  // ...
}
```

**Good**
```less
.avatar {
  border: 2px solid #fff;
  border-radius: 50%;
}

.one,
.selector,
.per-line {
  // ...
}
```

### Comments
* Let's implement the [KSS](https://github.com/kneath/kss) methodology to create automatic code documentation.
* Prefer comments on their own line. Avoid end-of-line comments.
* Write detailed comments for code that isn't self-documenting:
  - Uses of z-index
  - Compatibility or browser-specific hacks
  - Seemingly-superfluous specificity

### Writing Useful Class Selectors

Aim for re-usable, generalized components whose. However, please avoid overly atomic classes. As an example, instead of creating a single `.bordered` classname to add borders on all kinds of components, it is preferrable to define individual components whose names reflect their purpose rather than their appearance. This makes it much easier to maintain and use components with great consistency throughout the application.

Although we don't currently use BEM style syntax, its methodologies are desirable when naming classes. BEM stands for block, element, modifier, and it is the order we'd like our class selectors to follow. Blocks (like `table` or `panel`) contain elements (like `cell`), which will usually have modifiers (like `selected` or `warning`).

BEM doesn't mean you can't have OOCSS. You can (and should, when reasonable) compose multiple BEM classes as you see fit. For example, inside a `.form` block-level element, you might have a `.form-label` element which is also a block-level element `.label` with a `warning` modifier, `.label-warning`.

**Bad**
```less
.table {
  // ...
}

.cell {
  // ...
}

.selected-cell {
  // ...
}
```

**Good**
```less
.table {
  // ...
}

.table-cell {
  // ...
}

.table-cell-selected {
  // ...
}
```

### ID selectors

Using ID selectors is considered an anti-pattern. ID selectors introduce an unnecessarily high level of [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) to your rule declarations, and they are not reusable.

For more on this subject, read [CSS Wizardry's article](http://csswizardry.com/2014/07/hacks-for-dealing-with-specificity/) on dealing with specificity.

### Ordering

#### Property declarations

List all standard property declarations in alphabetical order immediately after the selector.
```less
.button-green {
  background: @neutral;
  // ...
}
```

#### Pseudo-classes and pseudo-elements

Pseudo-classes should go immediately after the property declarations, preceded by a newline. Pseudo-elements should go immediately after pseudo-classes if they exist, also preceded by a newline.
```less
.button {
  background: @neutral;
  // ...

  &:hover {
    // ...
  }

  &:after {
    // ...
  }
}
```

#### Nested selectors

Nested selectors, _if necessary_, go last, and nothing goes after them. Add whitespace between your rule declarations and nested selectors, as well as between adjacent nested selectors. Apply the same guidelines as above to your nested selectors.

```less
.button {
  background: @neutral;
  // ...

  &:hover {
    // ...
  }

  &:after {
    // ...
  }

  .icon {
    margin-right: 10px;
  }
}
```

**Try not to nest selectors more than three levels deep!**

```less
.page-container {

  .content {

    .profile {
      // STOP!
    }
  }
}
```

When selectors become this long, you're likely writing CSS that is:

* Strongly coupled to the HTML (fragile) *—OR—*
* Overly specific (powerful) *—OR—*
* Not reusable

### Variables

1. Prefer dash-cased variable names (e.g. `@my-variable`) over camelCased or snake_cased variable names.
2. Variables should be defined in `variables.less` directly next to the component's `styles.less`.

**Bad**
```less
@myVariable: 30px;
```

**Good**
```less
@my-variable:                                                                   30px;
```

### Mixins

Mixins should be used to DRY up your code, add clarity, or abstract complexity--in much the same way as well-named functions. Mixins that accept no arguments can be useful for this, but note that if you are not compressing your payload (e.g. gzip), this may contribute to unnecessary code duplication in the resulting styles.

### Extend directive

`&:extend` should be avoided because it has unintuitive and potentially dangerous behavior, especially when used with nested selectors. Even extending top-level placeholder selectors can cause problems if the order of selectors ends up changing later (e.g. if they are in other files and the order the files are loaded shifts). Gzipping should handle most of the savings you would have gained by using `&:extend`, and you can DRY up your stylesheets nicely with mixins.

### Colors

Prefer to re-use existing color variables, modifying them with functions if necessary. If you need to create a custom color, store the color in the component's variable stylesheet and always use the hex value instead of a named color.

#### Color Functions

1. Prefer to use our custom `color-lighten` function over the built-in `lighten` and `darken` functions.
2. Use the built-in `fade` function to get a rgba value out of hex colors. Eg. `fade(@neutral, 90%)`

### Vendor Prefixes

Never include vendor prefixes unless you are certain that Autoprefixer won't apply the proper vendor prefix.

