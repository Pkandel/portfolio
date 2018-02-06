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

var _style = require('next/node_modules/styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _admin = require('../../component/common/admin');

var _redux = require('redux');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../../redux/store');

var _layout = require('../../redux/actions/layout');

var layoutActions = _interopRequireWildcard(_layout);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/prakashkandel/projects/private/projects/portfolio/frontend/pages/admin/home.js?entry';

var FormItem = _antd.Form.Item;
var TextArea = _antd.Input.TextArea;

var Home = function (_Component) {
    (0, _inherits3.default)(Home, _Component);

    function Home(props) {
        (0, _classCallCheck3.default)(this, Home);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

        _this.handleUpload = function (e) {
            _this.setState({ uploadSuccess: true, img: e.target.files[0] });
        };

        _this.normFile = function (e) {
            // console.log('Upload event:', e);
            if (Array.isArray(e)) {
                return e;
            }
            return e && e.fileList;
        };

        _this.handleSubmit = function () {
            console.log('Form submitted');
        };

        _this.state = { uploadSuccess: false, img: {} };
        return _this;
    }

    (0, _createClass3.default)(Home, [{
        key: 'render',
        value: function render() {
            var getFieldDecorator = this.props.form.getFieldDecorator;

            return _react2.default.createElement(_admin.Layout, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_antd.Form, { className: 'login-form', onSubmit: this.handleSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement(FormItem, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_antd.Input, {
                placeholder: 'Enter Your Name',
                size: 'large',
                addonAfter: "*",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            })), _react2.default.createElement(FormItem, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_antd.Input, {
                placeholder: 'Title (Javascript Developer)',
                size: 'large',
                addonAfter: "*",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            })), _react2.default.createElement(FormItem, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_antd.Input, {
                placeholder: 'Company Name',
                size: 'large',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            })), _react2.default.createElement(FormItem, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(TextArea, {
                placeholder: 'Introduce Yourself',
                rows: 4,

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            })), _react2.default.createElement(FormItem, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_antd.Input, {
                placeholder: 'Email',
                size: 'large',
                addonAfter: "*",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            })), _react2.default.createElement(FormItem, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_antd.Input, {
                placeholder: 'LinkedIn',
                size: 'large',
                addonAfter: "*",
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            })), _react2.default.createElement(FormItem, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement(_antd.Input, {
                placeholder: 'Facebook',
                size: 'large',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            })), _react2.default.createElement(FormItem, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement('div', {
                className: 'jsx-3691539686' + ' ' + 'break break-lg',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }), _react2.default.createElement('label', {
                className: 'jsx-3691539686',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, 'Upload your picture: '), getFieldDecorator('upload', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile
            })(_react2.default.createElement(_antd.Upload, { name: 'logo', action: '/upload', listType: 'picture', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement(_antd.Button, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement(_antd.Icon, { type: 'upload', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }), ' Click to upload')))), _react2.default.createElement(FormItem, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, _react2.default.createElement(_antd.Button, { type: 'primary', htmlType: 'submit', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, 'Submit'))), _react2.default.createElement(_style2.default, {
                styleId: '3691539686',
                css: 'input:focus{font-size:0.8em;-webkit-transition:0.4s;transition:0.4s;}label.jsx-3691539686{margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL2hvbWUuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0c0QixBQUdxQyxBQUlFLGdCQUhGLEVBSXBCLHNDQUhBIiwiZmlsZSI6InBhZ2VzL2FkbWluL2hvbWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByYWthc2hrYW5kZWwvcHJvamVjdHMvcHJpdmF0ZS9wcm9qZWN0cy9wb3J0Zm9saW8vZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBJY29uLCBJbnB1dCwgQnV0dG9uLCBVcGxvYWQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9jb21tb24vYWRtaW4nO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vLi4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0ICAqIGFzIGxheW91dEFjdGlvbnMgIGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvbGF5b3V0JztcbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgdXBsb2FkU3VjY2VzczogZmFsc2UsIGltZzoge30gfTtcbiAgICB9XG4gICAgaGFuZGxlVXBsb2FkID0gKGUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVwbG9hZFN1Y2Nlc3M6IHRydWUsIGltZzogZS50YXJnZXQuZmlsZXNbMF0gfSlcbiAgICB9XG4gICAgbm9ybUZpbGUgPSAoZSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnVXBsb2FkIGV2ZW50OicsIGUpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGUgJiYgZS5maWxlTGlzdDtcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGb3JtIHN1Ym1pdHRlZCcpXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBnZXRGaWVsZERlY29yYXRvciB9ID0gdGhpcy5wcm9wcy5mb3JtO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImxvZ2luLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9ID5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25BZnRlcj17XCIqXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlIChKYXZhc2NyaXB0IERldmVsb3BlcilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25BZnRlcj17XCIqXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbXBhbnkgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW50cm9kdWNlIFlvdXJzZWxmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9e1wiKlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaW5rZWRJblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRvbkFmdGVyPXtcIipcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmFjZWJvb2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFrIGJyZWFrLWxnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VXBsb2FkIHlvdXIgcGljdHVyZTogPC9sYWJlbD4gIFxuICAgICAgICAgICAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCd1cGxvYWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wTmFtZTogJ2ZpbGVMaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRWYWx1ZUZyb21FdmVudDogdGhpcy5ub3JtRmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWQgbmFtZT1cImxvZ29cIiBhY3Rpb249XCIvdXBsb2FkXCIgbGlzdFR5cGU9XCJwaWN0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidXBsb2FkXCIgLz4gQ2xpY2sgdG8gdXBsb2FkXG4gICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1VwbG9hZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKGlucHV0OmZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgV3JhcHBlZERlbW8gPSBGb3JtLmNyZWF0ZSgpKEhvbWUpO1xuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxheW91dEFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhsYXlvdXRBY3Rpb25zLCBkaXNwYXRjaClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChzdG9yZSwgbnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShXcmFwcGVkRGVtbyk7XG4iXX0= */\n/*@ sourceURL=pages/admin/home.js?entry */'
            }));
        }
    }]);

    return Home;
}(_react.Component);

var WrappedDemo = _antd.Form.create()(Home);
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        layoutActions: (0, _redux.bindActionCreators)(layoutActions, dispatch)
    };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.store, null, mapDispatchToProps)(WrappedDemo);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FkbWluL2hvbWUuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiRm9ybSIsIkljb24iLCJJbnB1dCIsIkJ1dHRvbiIsIlVwbG9hZCIsIkxheW91dCIsImJpbmRBY3Rpb25DcmVhdG9ycyIsIndpdGhSZWR1eCIsInN0b3JlIiwibGF5b3V0QWN0aW9ucyIsIkZvcm1JdGVtIiwiSXRlbSIsIlRleHRBcmVhIiwiSG9tZSIsInByb3BzIiwiaGFuZGxlVXBsb2FkIiwiZSIsInNldFN0YXRlIiwidXBsb2FkU3VjY2VzcyIsImltZyIsInRhcmdldCIsImZpbGVzIiwibm9ybUZpbGUiLCJBcnJheSIsImlzQXJyYXkiLCJmaWxlTGlzdCIsImhhbmRsZVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImdldEZpZWxkRGVjb3JhdG9yIiwiZm9ybSIsInZhbHVlUHJvcE5hbWUiLCJnZXRWYWx1ZUZyb21FdmVudCIsIldyYXBwZWREZW1vIiwiY3JlYXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFTLEFBQU0sQUFBTSxBQUFPLEFBQVE7O0FBQ3BDLEFBQVMsQUFBYzs7QUFDdkIsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFhOztBQUN0QixBQUFROztJQUFSLEFBQWEsQUFBb0I7Ozs7Ozs7O0FBQ2pDLElBQU0sV0FBVyxXQUFqQixBQUFzQjtJLEFBQ2QsVyxBQUFhLFksQUFBYjs7SSxBQUVGO2tDQUNGOztrQkFBQSxBQUFZLE9BQU87NENBQUE7O3NJQUFBLEFBQ1Q7O2NBRFMsQUFJbkIsZUFBZSxVQUFBLEFBQUMsR0FBTSxBQUNsQjtrQkFBQSxBQUFLLFNBQVMsRUFBRSxlQUFGLEFBQWlCLE1BQU0sS0FBSyxFQUFBLEFBQUUsT0FBRixBQUFTLE1BQW5ELEFBQWMsQUFBNEIsQUFBZSxBQUM1RDtBQU5rQjs7Y0FBQSxBQU9uQixXQUFXLFVBQUEsQUFBQyxHQUFNLEFBQ2Q7QUFDQTtnQkFBSSxNQUFBLEFBQU0sUUFBVixBQUFJLEFBQWMsSUFBSSxBQUNsQjt1QkFBQSxBQUFPLEFBQ1Y7QUFDRDttQkFBTyxLQUFLLEVBQVosQUFBYyxBQUNqQjtBQWJrQjs7Y0FBQSxBQWVuQixlQUFlLFlBQU0sQUFDakI7b0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDZjtBQWpCa0IsQUFFZjs7Y0FBQSxBQUFLLFFBQVEsRUFBRSxlQUFGLEFBQWlCLE9BQU8sS0FGdEIsQUFFZixBQUFhLEFBQTZCO2VBQzdDOzs7OztpQ0FlUTtnQkFBQSxBQUNHLG9CQUFzQixLQUFBLEFBQUssTUFEOUIsQUFDb0MsS0FEcEMsQUFDRyxBQUVSOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsNEJBQUssV0FBTixBQUFnQixjQUFhLFVBQVUsS0FBdkMsQUFBNEM7OEJBQTVDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDOzZCQUFELEFBQ2dCLEFBQ1o7c0JBRkosQUFFUyxBQUNMOzRCQUhKLEFBR2dCOzs4QkFIaEI7Z0NBRlIsQUFDSSxBQUNJLEFBTUo7QUFOSTtBQUNJLGlDQUtQLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7NkJBQUQsQUFDZ0IsQUFDWjtzQkFGSixBQUVTLEFBQ0w7NEJBSEosQUFHZ0I7OzhCQUhoQjtnQ0FUUixBQVFJLEFBQ0ksQUFNSjtBQU5JO0FBQ0ksaUNBS1AsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzs2QkFBRCxBQUNnQixBQUNaO3NCQUZKLEFBRVM7OzhCQUZUO2dDQWhCUixBQWVJLEFBQ0ksQUFLSjtBQUxJO0FBQ0ksaUNBSVAsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsNkNBQ0ksQUFBQzs2QkFBRCxBQUNnQixBQUNaO3NCQUZKLEFBRVU7Ozs4QkFGVjtnQ0F0QlIsQUFxQkksQUFDSSxBQU1KO0FBTkk7QUFDSSxpQ0FLUCxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDOzZCQUFELEFBQ2dCLEFBQ1o7c0JBRkosQUFFUyxBQUNMOzRCQUhKLEFBR2dCOzs4QkFIaEI7Z0NBN0JSLEFBNEJJLEFBQ0ksQUFNSjtBQU5JO0FBQ0ksaUNBS1AsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQzs2QkFBRCxBQUNnQixBQUNaO3NCQUZKLEFBRVMsQUFDTDs0QkFISixBQUdnQjs7OEJBSGhCO2dDQXBDUixBQW1DSSxBQUNJLEFBTUo7QUFOSTtBQUNJLGlDQUtQLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUM7NkJBQUQsQUFDZ0IsQUFDWjtzQkFGSixBQUVTOzs4QkFGVDtnQ0EzQ1IsQUEwQ0ksQUFDSSxBQUtKO0FBTEk7QUFDSSxpQ0FJUCxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQTtvREFDSSxBQUFlOzs4QkFBZjtnQ0FESixBQUNJLEFBQ0Y7QUFERTtBQUFBLGdDQUNGLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZGLEFBRUUsQUFDRyw0Q0FBQSxBQUFrQjsrQkFBVSxBQUNWLEFBQ2Y7bUNBQW1CLEtBRnRCLEFBQTRCLEFBRUQ7QUFGQyxBQUN6QiwrQkFHQSxBQUFDLDhCQUFPLE1BQVIsQUFBYSxRQUFPLFFBQXBCLEFBQTJCLFdBQVUsVUFBckMsQUFBOEM7OEJBQTlDO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsNEJBQUssTUFBTixBQUFXOzhCQUFYO2dDQURKLEFBQ0k7QUFBQTtnQkF6RHBCLEFBZ0RJLEFBR0ssQUFJRyxBQUNJLEFBTVosd0NBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDUTtBQURSO0FBQUEsK0JBQ1EsQUFBQyw4QkFBTyxNQUFSLEFBQWEsV0FBVSxVQUF2QixBQUFnQzs4QkFBaEM7Z0NBQUE7QUFBQTtlQWhFaEIsQUFDSSxBQThESSxBQUNRO3lCQWhFaEI7cUJBREosQUFDSSxBQStFUDtBQS9FTzs7Ozs7QSxBQXZCTzs7QUF5R25CLElBQU0sY0FBYyxXQUFBLEFBQUssU0FBekIsQUFBb0IsQUFBYztBQUNsQyxJQUFNLHFCQUFxQixTQUFyQixBQUFxQiw2QkFBWSxBQUNuQzs7dUJBQ21CLCtCQUFBLEFBQW1CLGVBRHRDLEFBQU8sQUFDWSxBQUFrQyxBQUV4RDtBQUhVLEFBQ0g7QUFGUixBQU1BOztrQkFBZSxBQUFVLDhDQUFWLEFBQWlCLE1BQWpCLEFBQXVCLG9CQUF0QyxBQUFlLEFBQTJDIiwiZmlsZSI6ImhvbWUuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByYWthc2hrYW5kZWwvcHJvamVjdHMvcHJpdmF0ZS9wcm9qZWN0cy9wb3J0Zm9saW8vZnJvbnRlbmQifQ==