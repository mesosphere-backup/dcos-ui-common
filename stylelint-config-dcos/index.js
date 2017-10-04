module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-order",
    "stylelint-no-browser-hacks/lib"
  ],
  "rules": {
    "at-rule-empty-line-before": ["always", {
      except: ["blockless-after-same-name-blockless"],
      ignore: ["after-comment"]
    }],
    "at-rule-name-space-after": "always",
    "at-rule-no-unknown": true,
    "at-rule-no-vendor-prefix": true,
    "block-closing-brace-newline-before": "always",
    "block-opening-brace-newline-after": "always",
    "color-named": "never",
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-colon-space-after": "always-single-line",
    "declaration-empty-line-before": "never",
    "font-family-name-quotes": "always-unless-keyword",
    "font-weight-notation": "numeric",
    "function-blacklist": ["hsla"],
    "function-comma-newline-before": "never-multi-line",
    "function-parentheses-newline-inside": "never-multi-line",
    "function-parentheses-space-inside": "never",
    "function-url-quotes": "always",
    "media-feature-name-no-vendor-prefix": true,
    "media-query-list-comma-space-after": "always",
    "no-duplicate-selectors": true,
    "order/order": [
      "custom-properties",
      "declarations"
    ],
    "order/properties-alphabetical-order": true,
    "plugin/no-browser-hacks": [true, {
        browsers: [
            "last 2 versions",
            "ie >=7"
        ]
    }],
    "property-no-vendor-prefix": true,
    "rule-empty-line-before": [
      "always", {
        except: [],
        ignore: ["after-comment"],
    } ],
    "selector-attribute-quotes": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-pseudo-element-colon-notation": "single",
    "string-quotes": "single",
    "value-keyword-case": [
        "lower",
        {
          "ignoreKeywords": ["BlinkMacSystemFont"]
        }
      ],
    "value-list-comma-space-after": "always-single-line"
  }
};
