'use strict';

//#############################################################################
// Library includes.
//#############################################################################

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('animated-ellipsis');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//#############################################################################
// React components.
//#############################################################################
var ReactAnimatedEllipsis = function (_React$Component) {
  _inherits(ReactAnimatedEllipsis, _React$Component);

  function ReactAnimatedEllipsis() {
    _classCallCheck(this, ReactAnimatedEllipsis);

    return _possibleConstructorReturn(this, (ReactAnimatedEllipsis.__proto__ || Object.getPrototypeOf(ReactAnimatedEllipsis)).apply(this, arguments));
  }

  _createClass(ReactAnimatedEllipsis, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          className = _props.className,
          marginLeft = _props.marginLeft,
          spacing = _props.spacing,
          fontSize = _props.fontSize;

      if (fontSize) {
        style.fontSize = fontSize;
      }

      return _react2.default.createElement('span', {
        ref: function ref(_ref) {
          return _ref && _ref.animateEllipsis();
        },
        className: className,
        style: style,
        'data-margin-left': marginLeft,
        'data-spacing': spacing });
    }
  }]);

  return ReactAnimatedEllipsis;
}(_react2.default.Component);

ReactAnimatedEllipsis.propTypes = {
  style: _react2.default.PropTypes.object,
  className: _react2.default.PropTypes.string,
  fontSize: _react2.default.PropTypes.string,
  marginLeft: _react2.default.PropTypes.string,
  spacing: _react2.default.PropTypes.string
};

ReactAnimatedEllipsis.defaultProps = {
  style: {},
  className: '',
  fontSize: '2rem',
  marginLeft: '0.1rem',
  spacing: '0.1rem'
};

//#############################################################################
// Exports.
//#############################################################################
exports.default = ReactAnimatedEllipsis;