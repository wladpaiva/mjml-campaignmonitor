'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mjmlValidator = require('mjml-validator');

var _mjmlCore = require('mjml-core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _mjmlValidator.registerDependencies)({
  // Tell the validator which tags are allowed as our component's parent
  'mj-body': ['cm-repeater'],
  'mj-column': ['cm-repeater'],
  // Tell the validator which tags are allowed as our component's children
  'cm-repeater': ['mj-section', 'mj-accordion', 'mj-button', 'mj-carousel', 'mj-divider', 'mj-html', 'mj-image', 'mj-raw', 'mj-social', 'mj-spacer', 'mj-table', 'mj-text', 'mj-navbar', 'cm-image', 'cm-layout']
});

var CmRepeater = function (_BodyComponent) {
  _inherits(CmRepeater, _BodyComponent);

  function CmRepeater() {
    _classCallCheck(this, CmRepeater);

    return _possibleConstructorReturn(this, (CmRepeater.__proto__ || Object.getPrototypeOf(CmRepeater)).apply(this, arguments));
  }

  _createClass(CmRepeater, [{
    key: 'render',
    value: function render() {
      return '\n        <repeater>\n        ' + this.renderChildren(this.props.children) + '\n        </repeater>\n      ';
    }
  }]);

  return CmRepeater;
}(_mjmlCore.BodyComponent);

exports.default = CmRepeater;