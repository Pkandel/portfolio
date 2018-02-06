'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _style = require('next/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _layout = require('../../../../redux/actions/layout');

var layoutActions = _interopRequireWildcard(_layout);

var _antd = require('antd');

var _layout2 = require('./layout.css');

var _layout3 = _interopRequireDefault(_layout2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/prakashkandel/projects/private/projects/portfolio/frontend/component/common/admin/layout/layout.js';

var Header = _antd.Layout.Header,
    Sider = _antd.Layout.Sider,
    Content = _antd.Layout.Content;
var Item = _antd.Menu.Item;

var Layout = function (_Component) {
    (0, _inherits3.default)(Layout, _Component);

    function Layout(props) {
        (0, _classCallCheck3.default)(this, Layout);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

        _this.toggle = function () {
            _this.setState({
                collapsed: !_this.state.collapsed
            });
            _this.props.layoutActions.toggleSidebar(_this.state.collapsed);
        };

        _this.handleClick = function (e) {
            var key = e.key;

            _index2.default.push('/admin/' + key);
        };

        _this.state = {
            collapsed: _this.props.layout.collapsed,
            selectedRoute: undefined
        };
        return _this;
    }

    (0, _createClass3.default)(Layout, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                selectedRoute: _index2.default['router'].route.replace('/admin/', '')
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var selectedRoute = this.state.selectedRoute;
            // what ever data needs to resolve put it here

            if (!selectedRoute) {
                return null;
            }
            return _react2.default.createElement(_antd.Layout, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('title', {
                className: 'jsx-' + _layout3.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, 'Portfolio Admin Panel'), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
                rel: 'stylesheet', className: 'jsx-' + _layout3.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }), _react2.default.createElement('link', { href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.2.0/antd.css', rel: 'stylesheet', className: 'jsx-' + _layout3.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            })), _react2.default.createElement(Sider, {
                trigger: null,
                collapsible: true,
                collapsed: this.state.collapsed,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-' + _layout3.default.__scopedHash + ' ' + 'logo',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }), _react2.default.createElement(_antd.Menu, { theme: 'dark', mode: 'inline', onClick: this.handleClick, defaultSelectedKeys: [selectedRoute], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(Item, { key: 'home', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement(_antd.Icon, { type: 'home', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }), _react2.default.createElement('span', {
                className: 'jsx-' + _layout3.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Home')), _react2.default.createElement(Item, { key: 'about', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement(_antd.Icon, { type: 'smile', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }), _react2.default.createElement('span', {
                className: 'jsx-' + _layout3.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'About Me')), _react2.default.createElement(Item, { key: 'projects', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(_antd.Icon, { type: 'book', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }), _react2.default.createElement('span', {
                className: 'jsx-' + _layout3.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Projects')), _react2.default.createElement(Item, { key: 'contact', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement(_antd.Icon, { type: 'mail', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }), _react2.default.createElement('span', {
                className: 'jsx-' + _layout3.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'Contact Me')), _react2.default.createElement(Item, { key: 'blog', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_antd.Icon, { type: 'form', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }), _react2.default.createElement('span', {
                className: 'jsx-' + _layout3.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Write Blog')))), _react2.default.createElement(_antd.Layout, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement(Header, { style: { background: '#fff', padding: 0 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement(_antd.Icon, {
                className: 'trigger',
                type: this.state.collapsed ? 'menu-unfold' : 'menu-fold',
                onClick: this.toggle,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }), 'I can put what ever I like here'), _react2.default.createElement(Content, { style: { margin: '24px 16px', padding: 24, background: '#fff', overflow: 'initial' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, this.props.children, _react2.default.createElement('hr', {
                className: 'jsx-' + _layout3.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }), _react2.default.createElement('h2', {
                className: 'jsx-' + _layout3.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, 'Debug Area'), _react2.default.createElement('pre', {
                className: 'jsx-' + _layout3.default.__scopedHash,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, (0, _stringify2.default)(this.state, null, 5)))), _react2.default.createElement(_style2.default, {
                styleId: _layout3.default.__scopedHash,
                css: _layout3.default.__scoped
            }));
        }
    }]);

    return Layout;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        layoutActions: (0, _redux.bindActionCreators)(layoutActions, dispatch)
    };
};

var mapStateToProps = function mapStateToProps(_ref) {
    var layout = _ref.layout;
    return { layout: layout };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Layout);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9jb21tb24vYWRtaW4vbGF5b3V0L2xheW91dC5qcyJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjb25uZWN0IiwiUm91dGVyIiwiSGVhZCIsImxheW91dEFjdGlvbnMiLCJMYXlvdXQiLCJBcHBMYXlvdXQiLCJNZW51IiwiSWNvbiIsIkhlYWRlciIsIlNpZGVyIiwiQ29udGVudCIsIkl0ZW0iLCJsYXlvdXRTdHlsZSIsInByb3BzIiwidG9nZ2xlIiwic2V0U3RhdGUiLCJjb2xsYXBzZWQiLCJzdGF0ZSIsInRvZ2dsZVNpZGViYXIiLCJoYW5kbGVDbGljayIsImUiLCJrZXkiLCJwdXNoIiwibGF5b3V0Iiwic2VsZWN0ZWRSb3V0ZSIsInVuZGVmaW5lZCIsInJvdXRlIiwicmVwbGFjZSIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwibWFyZ2luIiwib3ZlcmZsb3ciLCJjaGlsZHJlbiIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwibWFwU3RhdGVUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87O0lBQVAsQUFBWSxBQUFtQjs7QUFDL0IsQUFBUyxBQUFVLEFBQVcsQUFBTTs7QUFHcEMsQUFBTyxBQUFpQjs7Ozs7Ozs7OztJQUZoQixBLFNBQTJCLEEsYUFBM0IsQTtJQUFRLEEsUSxBQUFtQixhLEFBQW5CO0ksQUFBTyxVLEFBQVksYUFBWixBO0lBQ2YsQSxPLEFBQVMsV0FBVCxBOztJLEFBRUY7b0NBQ0Y7O29CQUFBLEFBQVksT0FBTzs0Q0FBQTs7MElBQUEsQUFDVDs7Y0FEUyxBQU9uQixTQUFTLFlBQU0sQUFDWDtrQkFBQSxBQUFLOzJCQUNVLENBQUMsTUFBQSxBQUFLLE1BRHJCLEFBQWMsQUFDYSxBQUUzQjtBQUhj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cURBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQWhDaEIsQUFPSSxBQU1JLEFBaUJJLEFBRUksQUFLWixrQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELFVBQVEsT0FBTyxFQUFFLFlBQUYsQUFBYyxRQUFRLFNBQXJDLEFBQWUsQUFBK0I7OEJBQTlDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzJCQUFELEFBQ2MsQUFDVjtzQkFBTSxLQUFBLEFBQUssTUFBTCxBQUFXLFlBQVgsQUFBdUIsZ0JBRmpDLEFBRWlELEFBQzdDO3lCQUFTLEtBSGIsQUFHa0I7OzhCQUhsQjtnQ0FESixBQUNJO0FBQUE7QUFDSSxnQkFIWixBQUNJLEFBUUEsb0RBQUMsY0FBRCxXQUFTLE9BQU8sRUFBRSxRQUFGLEFBQVUsYUFBYSxTQUF2QixBQUFnQyxJQUFJLFlBQXBDLEFBQWdELFFBQVEsVUFBeEUsQUFBZ0IsQUFBaUU7OEJBQWpGO2dDQUFBLEFBQ0s7QUFETDtvQkFDSyxBQUFLLE1BRFYsQUFDZ0IsQUFDWjtxREFBQTs7OEJBQUE7Z0NBRkosQUFFSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBO3FEQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFISixBQUdJLEFBQ1QsK0JBQUEsY0FBQTtxREFBQTs7OEJBQUE7Z0NBQUEsQUFDRztBQURIO0FBQUEsd0NBQ2tCLEtBQWYsQUFBb0IsT0FBcEIsQUFBMkIsTUFuRGpDLEFBcUNJLEFBU0ksQUFJTCxBQUNHLEFBQWlDOzBDQW5EdkM7c0NBREosQUFDSSxBQTBEUDtBQTFETzs7Ozs7QSxBQWhDUzs7QUE2RnJCLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLDZCQUFZLEFBQ25DOzt1QkFDbUIsK0JBQUEsQUFBbUIsZUFEdEMsQUFBTyxBQUNZLEFBQWtDLEFBRXhEO0FBSFUsQUFDSDtBQUZSOztBQU1BLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHNCQUFBO1FBQUEsQUFBRyxjQUFILEFBQUc7V0FBYyxFQUFFLFFBQW5CLEFBQWlCO0FBQXpDLEFBQ0E7a0JBQWUseUJBQUEsQUFBUSxpQkFBUixBQUF5QixvQkFBeEMsQUFBZSxBQUE2QyIsImZpbGUiOiJsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByYWthc2hrYW5kZWwvcHJvamVjdHMvcHJpdmF0ZS9wcm9qZWN0cy9wb3J0Zm9saW8vZnJvbnRlbmQifQ==