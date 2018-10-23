'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _mjmlValidator = require('mjml-validator');

var _mjmlCore = require('mjml-core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _mjmlValidator.registerDependencies)({
  // Tell the validator which tags are allowed as our component's parent
  'cm-repeater': ['cm-layout'],
  // Tell the validator which tags are allowed as our component's children
  'cm-layout': ['mj-section', 'mj-accordion', 'mj-button', 'mj-carousel', 'mj-divider', 'mj-html', 'mj-image', 'mj-raw', 'mj-social', 'mj-spacer', 'mj-table', 'mj-text', 'mj-navbar', 'cm-image']
});

var CmLayout = (_temp = _class = function (_BodyComponent) {
  _inherits(CmLayout, _BodyComponent);

  function CmLayout() {
    _classCallCheck(this, CmLayout);

    return _possibleConstructorReturn(this, (CmLayout.__proto__ || Object.getPrototypeOf(CmLayout)).apply(this, arguments));
  }

  _createClass(CmLayout, [{
    key: 'render',
    value: function render() {
      return '\n        <layout\n          ' + this.htmlAttributes({
        label: this.getAttribute('label')
      }) + '\n        >\n        ' + this.renderChildren(this.props.children) + '\n        </layout>\n      ';
    }
  }]);

  return CmLayout;
}(_mjmlCore.BodyComponent), _class.allowedAttributes = {
  label: 'string'
}, _temp);
exports.default = CmLayout;