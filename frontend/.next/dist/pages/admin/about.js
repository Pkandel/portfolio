'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _admin = require('../../component/common/admin');

var _redux = require('redux');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../../redux/store');

var _layout = require('../../redux/actions/layout');

var layoutActions = _interopRequireWildcard(_layout);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/prakashkandel/projects/private/projects/portfolio/frontend/pages/admin/about.js?entry';


var About = function (_Component) {
    (0, _inherits3.default)(About, _Component);

    function About() {
        (0, _classCallCheck3.default)(this, About);

        return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
    }

    (0, _createClass3.default)(About, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_admin.Layout, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, 'About Me'));
        }
    }]);

    return About;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        layoutActions: (0, _redux.bindActionCreators)(layoutActions, dispatch)
    };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.store, null, mapDispatchToProps)(About);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL2Fib3V0LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIlRleHRGaWVsZCIsIk11aVRoZW1lUHJvdmlkZXIiLCJMYXlvdXQiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJ3aXRoUmVkdXgiLCJzdG9yZSIsImxheW91dEFjdGlvbnMiLCJBYm91dCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBYzs7QUFDdkIsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFhOztBQUN0QixBQUFROztJQUFSLEFBQWEsQUFBb0I7Ozs7Ozs7OztJQUMzQixBOzs7Ozs7Ozs7OztpQ0FDTyxBQUNMO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLGFBQUEsa0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFDSSxBQUNBLEFBR1A7Ozs7O0FBUGUsQTs7QUFVcEIsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsNkJBQVksQUFDbkM7O3VCQUNtQiwrQkFBQSxBQUFtQixlQUR0QyxBQUFPLEFBQ1ksQUFBa0MsQUFFeEQ7QUFIVSxBQUNIO0FBRlIsQUFNQTs7a0JBQWUsQUFBVSw4Q0FBVixBQUFpQixNQUFqQixBQUF1QixvQkFBdEMsQUFBZSxBQUEyQyIsImZpbGUiOiJhYm91dC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJha2FzaGthbmRlbC9wcm9qZWN0cy9wcml2YXRlL3Byb2plY3RzL3BvcnRmb2xpby9mcm9udGVuZCJ9