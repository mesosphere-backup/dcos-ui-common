# DC/OS Stylelint Configuration

This configuration extends (stylelint-config-standard)[https://github.com/stylelint/stylelint-config-standard].

## Example
```LESS
& when (@status-bar-enabled) {

  // A single newline is required before nested properties.
  @keyframes candy-stripe {

    0% {
      // Units on zero-values are prohibited.
      background-position: 0 0;
    }

    100% {
      background-position: 16px 0;
    }
  }

  // Properties must be alphabetized.
  .status-bar {
    background-color: @neutral;
    border-radius: 1000px;
    display: inline-flex;
    height: @base-spacing-unit * 1/6;
    line-height: @base-spacing-unit * 1/6;
    overflow: hidden;
    text-align: left;
    // Duplicate properties are prohibited; this would trigger a warning.
    width: @base-spacing-unit * 2;
    width: auto;

    .bar {
      background-color: currentColor;
      // Multiple property values must be separated by newlines.
      box-shadow:
        1px 0 0 0 @body-background-color,
        0 5px 20px fade(@body-background-color, 10%);
      display: inline-block;
      height: 100%;
      transition: width 600ms;
      width: 100%;

      &.staged {
        animation: candy-stripe 1s linear infinite;
        // Multiple function arguments must be separated by newlines.
        background-image:
          linear-gradient(-45deg,
          color-lighten(@neutral, 10) 0,
          color-lighten(@neutral, 10) 25%,
          color-lighten(@neutral, -10) 25%,
          color-lighten(@neutral, -10) 50%,
          color-lighten(@neutral, 10) 50%,
          color-lighten(@neutral, 10) 75%,
          color-lighten(@neutral, -10) 75%,
          color-lighten(@neutral, -10) 100%);
        background-size: 16px 16px;
      }

      // Selectors in a selector list must be separated by newlines.
      &.color-1,
      &.healthy {
        background-color: @green;
      }
    }
  }

  // Duplicate declarations are prohibited; this would trigger a warning.
  .status-bar {
    // Some extra styles...
  }
}
```
