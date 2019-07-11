"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mjmlValidator = require("mjml-validator");

var _mjmlCore = require("mjml-core");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _mjmlValidator.registerDependencies)({
  'cm-repeater': ['cm-layout'],
  'cm-layout': ['mj-section', 'mj-accordion', 'mj-button', 'mj-carousel', 'mj-divider', 'mj-html', 'mj-image', 'mj-raw', 'mj-social', 'mj-spacer', 'mj-table', 'mj-text', 'mj-navbar', 'mj-wrapper', 'cm-image']
});

class CmLayout extends _mjmlCore.BodyComponent {
  render() {
    return `
        <layout
          ${this.htmlAttributes({
      label: this.getAttribute('label')
    })}
        >
        ${this.renderChildren(this.props.children)}
        </layout>
      `;
  }

}

exports.default = CmLayout;

_defineProperty(CmLayout, "allowedAttributes", {
  label: 'string'
});