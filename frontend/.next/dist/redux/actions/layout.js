'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toggleSidebar = toggleSidebar;
function toggleSidebar(bool) {
    return function (dispatch) {
        dispatch({
            type: 'TOGGLE_SIDEBAR',
            payload: !bool
        });
    };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4L2FjdGlvbnMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbInRvZ2dsZVNpZGViYXIiLCJib29sIiwiZGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFBUSxBQUFTO0FBQVQsdUJBQUEsQUFBdUIsTUFBSyxBQUNoQztXQUFPLG9CQUFZLEFBQ2Y7O2tCQUFTLEFBQ0MsQUFDTjtxQkFBUyxDQUZiLEFBQVMsQUFFSyxBQUVqQjtBQUpZLEFBQ0w7QUFGUixBQU1IIiwiZmlsZSI6ImxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcHJha2FzaGthbmRlbC9wcm9qZWN0cy9wcml2YXRlL3Byb2plY3RzL3BvcnRmb2xpby9mcm9udGVuZCJ9