'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reducer;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { collapsed: false };
    var action = arguments[1];

    switch (action.type) {
        case 'TOGGLE_SIDEBAR':
            {
                return (0, _extends3.default)({}, state, { collapsed: action.payload });
            }
        default:
            {
                return state;
            }
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L3JlZHVjZXJzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJjb2xsYXBzZWQiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFBZSxTQUFTLEFBQVQsVUFBdUQ7UUFBdEMsQUFBc0MsNEVBQTlCLEVBQUUsV0FBVyxBQUFiLEFBQThCO1FBQVIsQUFBUSxtQkFDbEU7O1lBQU8sT0FBTyxBQUFkLEFBQ0k7YUFBSyxBQUFMLEFBQXVCO0FBQ25CO2tEQUFZLEFBQVosU0FBbUIsV0FBVyxPQUFPLEFBQXJDLEFBQ0g7QUFDQTtBQUFTO0FBQ047dUJBQU8sQUFBUCxBQUNIO0FBTkwsQUFRSCIsImZpbGUiOiJsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ByYWthc2hrYW5kZWwvcHJvamVjdHMvcHJpdmF0ZS9wcm9qZWN0cy9wb3J0Zm9saW8vZnJvbnRlbmQifQ==