import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Component-module_component__mvdh- {\n  color: red;\n}\n";
var classes = {"component":"Component-module_component__mvdh-"};
styleInject(css_248z);

var Component = function Component() {
  return /*#__PURE__*/React.createElement("div", {
    className: classes.component
  }, "Component hello world");
};

export { Component };
