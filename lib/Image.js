'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _mjmlValidator = require('mjml-validator');

var _mjmlCore = require('mjml-core');

var _min = require('lodash/min');

var _min2 = _interopRequireDefault(_min);

var _widthParser2 = require('mjml-core/lib/helpers/widthParser');

var _widthParser3 = _interopRequireDefault(_widthParser2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _mjmlValidator.registerDependencies)({
  // Tell the validator which tags are allowed as our component's parent
  'mj-hero': ['cm-image'],
  'mj-column': ['cm-image'],
  // Tell the validator which tags are allowed as our component's children
  'cm-image': []
});

var CmImage = (_temp2 = _class = function (_BodyComponent) {
  _inherits(CmImage, _BodyComponent);

  function CmImage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CmImage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CmImage.__proto__ || Object.getPrototypeOf(CmImage)).call.apply(_ref, [this].concat(args))), _this), _this.headStyle = function (breakpoint) {
      return '\n      @media only screen and (max-width:' + breakpoint + ') {\n        table.full-width-mobile { width: 100% !important; }\n        td.full-width-mobile { width: auto !important; }\n      }\n    ';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CmImage, [{
    key: 'getStyles',
    value: function getStyles() {
      var width = this.getContentWidth();
      var fullWidth = this.getAttribute('full-width') === 'full-width';

      var _widthParser = (0, _widthParser3.default)(width),
          parsedWidth = _widthParser.parsedWidth,
          unit = _widthParser.unit;

      return {
        img: {
          border: this.getAttribute('border'),
          'border-left': this.getAttribute('left'),
          'border-right': this.getAttribute('right'),
          'border-top': this.getAttribute('top'),
          'border-bottom': this.getAttribute('bottom'),
          'border-radius': this.getAttribute('border-radius'),
          display: 'block',
          outline: 'none',
          'text-decoration': 'none',
          height: this.getAttribute('height'),
          'min-width': fullWidth ? '100%' : null,
          width: '100%',
          'max-width': fullWidth ? '100%' : null
        },
        td: {
          width: fullWidth ? null : '' + parsedWidth + unit
        },
        table: {
          'min-width': fullWidth ? '100%' : null,
          'max-width': fullWidth ? '100%' : null,
          width: fullWidth ? '' + parsedWidth + unit : null,
          'border-collapse': 'collapse',
          'border-spacing': '0px'
        }
      };
    }
  }, {
    key: 'getContentWidth',
    value: function getContentWidth() {
      var width = this.getAttribute('width') ? parseInt(this.getAttribute('width'), 10) : Infinity;

      var _getBoxWidths = this.getBoxWidths(),
          box = _getBoxWidths.box;

      return (0, _min2.default)([box, width]);
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var height = this.getAttribute('height');
      return height && (height === 'auto' ? height : parseInt(height, 10));
    }
  }, {
    key: 'getSrc',
    value: function getSrc() {
      var placeholder = this.getAttribute('placeholder');
      var src = this.getAttribute('src');
      if (placeholder && !src) {
        var height = this.getHeight();
        var width = this.getContentWidth();

        return 'https://via.placeholder.com/' + width + 'x' + (height === 'auto' ? Math.round(width / 4 * 3) : height);
      }

      return src;
    }
  }, {
    key: 'renderImage',
    value: function renderImage() {
      var img = '\n        <img\n          ' + this.htmlAttributes({
        label: this.getAttribute('label'),
        alt: this.getAttribute('alt'),
        height: this.getHeight(),
        src: this.getSrc(),
        srcset: this.getAttribute('srcset'),
        style: 'img',
        title: this.getAttribute('title'),
        width: this.getContentWidth(),
        editable: this.getAttribute('editable') === 'true' || null,
        cm_dontimportimage: this.getAttribute('disable-importing'),
        cm_dontconvertlink: this.getAttribute('disable-tracking')
      }) + '\n        />\n      ';

      if (this.getAttribute('href')) {
        return '\n          <a\n            ' + this.htmlAttributes({
          href: this.getAttribute('href'),
          target: this.getAttribute('target'),
          rel: this.getAttribute('rel'),
          name: this.getAttribute('name')
        }) + '\n          >\n            ' + img + '\n          </a>\n        ';
      }

      return img;
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n        <table\n          ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table',
        class: this.getAttribute('fluid-on-mobile') ? 'full-width-mobile' : null
      }) + '\n        >\n          <tbody>\n            <tr>\n              <td ' + this.htmlAttributes({
        style: 'td',
        class: this.getAttribute('fluid-on-mobile') ? 'full-width-mobile' : null
      }) + '>\n                ' + this.renderImage() + '\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      ';
    }
  }]);

  return CmImage;
}(_mjmlCore.BodyComponent), _class.tagOmission = true, _class.allowedAttributes = {
  label: 'string',
  editable: 'string',
  alt: 'string',
  href: 'string',
  name: 'string',
  src: 'string',
  srcset: 'string',
  title: 'string',
  rel: 'string',
  align: 'enum(left,center,right)',
  border: 'string',
  'border-bottom': 'string',
  'border-left': 'string',
  'border-right': 'string',
  'border-top': 'string',
  'border-radius': 'unit(px,%){1,4}',
  'container-background-color': 'color',
  'disable-importing': 'string',
  'disable-tracking': 'string',
  'fluid-on-mobile': 'boolean',
  padding: 'unit(px,%){1,4}',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  placeholder: 'string',
  target: 'string',
  width: 'unit(px)',
  height: 'unit(px)'
}, _class.defaultAttributes = {
  editable: 'true',
  align: 'center',
  border: '0',
  height: 'auto',
  padding: '10px 25px',
  target: '_blank'
}, _temp2);
exports.default = CmImage;