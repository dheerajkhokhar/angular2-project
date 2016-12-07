import { FormControl } from '@angular/forms';

export class UsernameValidators{
  static cannotContainSpace(control: FormControl){
    if(control.value.indexOf(' ')>=0){
      return {cannotContainSpace:true};
    }
    return null;
  }

  static shouldBeUnique(control: FormControl){
    return new Promise((resolve,reject) =>{
      setTimeout(function(){
        if(control.value == "mike")
          resolve({shouldBeUnique:true});
        else 
          resolve(null);
      },1000)
    })
  }

}




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