"use strict";
var UsernameValidators = (function () {
    function UsernameValidators() {
    }
    UsernameValidators.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    };
    UsernameValidators.shouldBeUnique = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value == "mike")
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 1000);
        });
    };
    return UsernameValidators;
}());
exports.UsernameValidators = UsernameValidators;
//****************************************************************************************************
//Arrow Function Concept
// function(message){
//   console.log(message)
// }
// (message) =>{
//   console.log(message)
// }
// IF we have one parameter
// message =>{console.log(message)}
//Parameter => BODY
//**************************************************************************************************** 
//# sourceMappingURL=userNameValidators.js.map