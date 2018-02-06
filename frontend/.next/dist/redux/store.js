'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.store = undefined;

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exampleInitialState = {
    lastUpdate: 0,
    light: false,
    count: 0
};
var store = exports.store = function store() {
    var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;

    return (0, _redux.createStore)(_reducers2.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L3N0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsInJlZHVjZXIiLCJleGFtcGxlSW5pdGlhbFN0YXRlIiwibGFzdFVwZGF0ZSIsImxpZ2h0IiwiY291bnQiLCJzdG9yZSIsImluaXRpYWxTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQVMsQUFBYTs7QUFDdEIsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFhOzs7Ozs7QUFFcEIsSUFBTTtnQkFBc0IsQUFDWixBQUNaO1dBRndCLEFBRWpCLEFBQ1A7V0FISixBQUE0QixBQUdqQixBQUVYO0FBTDRCLEFBQ3hCO0FBSUcsSUFBTSx3QkFBUSxTQUFSLEFBQVEsUUFBd0M7UUFBdkMsQUFBdUMsbUZBQXhCLEFBQXdCLEFBQ3pEOztXQUFPLEFBQVksNENBQVosQUFBcUIsY0FBYyxpREFBMUMsQUFBTyxBQUFtQyxBQUFvQixBQUFnQixBQUMvRTtBQUZJIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wcmFrYXNoa2FuZGVsL3Byb2plY3RzL3ByaXZhdGUvcHJvamVjdHMvcG9ydGZvbGlvL2Zyb250ZW5kIn0=