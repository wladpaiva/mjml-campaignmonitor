"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mjmlValidator = require("mjml-validator");

var _mjmlCore = require("mjml-core");

(0, _mjmlValidator.registerDependencies)({
  'mj-body': ['cm-repeater'],
  'mj-column': ['cm-repeater'],
  'cm-repeater': ['mj-section', 'mj-accordion', 'mj-button', 'mj-carousel', 'mj-divider', 'mj-html', 'mj-image', 'mj-raw', 'mj-social', 'mj-spacer', 'mj-table', 'mj-text', 'mj-navbar', 'cm-image', 'cm-layout']
});

class CmRepeater extends _mjmlCore.BodyComponent {
  render() {
    return `
        <repeater>
        ${this.renderChildren(this.props.children)}
        </repeater>
      `;
  }

}

exports.default = CmRepeater;