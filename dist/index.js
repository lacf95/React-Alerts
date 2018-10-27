'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alert = function (_React$Component) {
		_inherits(Alert, _React$Component);

		function Alert() {
				_classCallCheck(this, Alert);

				return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
		}

		_createClass(Alert, [{
				key: 'render',
				value: function render() {

						var alert = null;

						var margin = parseInt(this.props.margin);
						var width = parseInt(this.props.width);
						var fontColor = this.props.fontColor;
						var backgroundColor = this.props.backgroundColor;


						var splitMessage = this.props.message.split(" ");
						var strongMessage = splitMessage[0];
						var restMessage = splitMessage.slice(1, splitMessage.length).join(" ");

						var divStyle = {
								margin: margin,
								width: width,
								color: fontColor,
								background: backgroundColor
						};

						if (this.props.type === 'danger') {
								alert = _react2.default.createElement(
										'div',
										{ className: 'alert alert-danger', style: divStyle },
										_react2.default.createElement(
												'a',
												{ href: '#', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'close' },
												'\xD7'
										),
										_react2.default.createElement(
												'strong',
												null,
												strongMessage
										),
										' ',
										restMessage
								);
						}
						if (this.props.type === 'info') {
								alert = _react2.default.createElement(
										'div',
										{ className: 'alert alert-info', style: divStyle },
										_react2.default.createElement(
												'a',
												{ href: '#', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'close' },
												'\xD7'
										),
										_react2.default.createElement(
												'strong',
												null,
												strongMessage
										),
										' ',
										restMessage
								);
						}
						if (this.props.type === 'success') {
								alert = _react2.default.createElement(
										'div',
										{ className: 'alert alert-success', style: divStyle },
										_react2.default.createElement(
												'a',
												{ href: '#', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'close' },
												'\xD7'
										),
										_react2.default.createElement(
												'strong',
												null,
												strongMessage
										),
										' ',
										restMessage
								);
						}

						if (this.props.type === 'warning') {
								alert = _react2.default.createElement(
										'div',
										{ className: 'alert alert-warning', style: divStyle },
										_react2.default.createElement(
												'a',
												{ href: '#', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'close' },
												'\xD7'
										),
										_react2.default.createElement(
												'strong',
												null,
												strongMessage
										),
										' ',
										restMessage
								);
						}

						if (this.props.type === 'secondary') {
								alert = _react2.default.createElement(
										'div',
										{ className: 'alert alert-secondary', style: divStyle },
										_react2.default.createElement(
												'a',
												{ href: '#', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'close' },
												'\xD7'
										),
										_react2.default.createElement(
												'strong',
												null,
												strongMessage
										),
										' ',
										restMessage
								);
						}

						if (this.props.type === 'light') {
								alert = _react2.default.createElement(
										'div',
										{ className: 'alert alert-light', style: divStyle },
										_react2.default.createElement(
												'a',
												{ href: '#', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'close' },
												'\xD7'
										),
										_react2.default.createElement(
												'strong',
												null,
												strongMessage
										),
										' ',
										restMessage
								);
						}

						return _react2.default.createElement(
								'div',
								null,
								alert
						);
				}
		}]);

		return Alert;
}(_react2.default.Component);

exports.default = Alert;