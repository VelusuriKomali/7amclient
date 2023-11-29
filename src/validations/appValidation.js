const criteriaConfiguration  = {
     Min5Chars: {
        regex:/.{5,}/,
        errorMsg: "Should Min 5 chars",
    },
    Exact10Digits: {
        regex:/^[0-9]{10}$/,
        errorMsg:"Exactly 10 digits",
    },
    OnlyAlpha: {
        regex:/^[a-zA-Z]+$/,
        errorMsg:"Alphabets Only",
    },
    EmailFormat: {
        regex:/^[a-zA-Z][a-zA-Z0-9]*@[a-zA-Z]{2,5}\.[a-z]{2,3}$/,
        errorMsg:"Should be in the Email Format",
    },
    OnlyDigits: {
        regex:/^[0-9]+$/,
        errorMsg:"Enter Digits Only",
    },
    SpecialCharsNotAllowed: {
        regex:/^[a-zA-Z0-9]+$/,
        errorMsg:"Special Chars not allowed",
    },
    ShouldNotAllowSpaces:{
        regex:/^\S*$/,
        errorMsg:"Should not allow spaces",
   },
   Required:{
    regex: /./,
    errorMsg:"Required!!",
   },
   Password: {
    regex:/(?=[a-zA-Z0-9@#$%^&+!=]+$)^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/,
    errorMsg:"Min 8 chars(min 1L, 1U, 1S, 1D)",
},
};
const validate=(inputControlObj)=>{
  const {value, criteria} = inputControlObj;
  for (let i=0; i< criteria.length; i++){
  const {regex, errorMsg } = criteriaConfiguration[criteria[i]]
   if(!regex.test(value)){
    inputControlObj.errMsg=errorMsg;
    break;
   }
}
}
//methods
export const fnFieldValidation=(name,value,inputControlls)=>{  //test the testbox userid,pwd data
  const clonedInputControlls=JSON.parse(JSON.stringify(inputControlls))
  const inputControlObj=clonedInputControlls.find((obj)=>{
    return obj.name===name
  })
  inputControlObj.errMsg="";
  inputControlObj.value=value;
validate(inputControlObj);
return clonedInputControlls;
}
export const fnFormValidation=(inputControlls)=>{  //test the entire form 
  const dataObj={};
  const clonedInputControlls=JSON.parse(JSON.stringify(inputControlls));
    clonedInputControlls.forEach((inputControlObj) => {
    dataObj[inputControlObj.name]=inputControlObj.value;
    validate(inputControlObj) ;
  });
  const isFormInValid=clonedInputControlls.some((obj)=>{
    return obj.errMsg !=""
  })
  return[isFormInValid, dataObj,clonedInputControlls]
}
export const Reset=(inputControlls)=>{   //some times to reset the values
    const clonedInputControlls=JSON.parse(JSON.stringify(inputControlls));
    clonedInputControlls.forEach((inputControlObj) => {
   inputControlObj.errMsg="";
   inputControlObj.value="";
    })
    return clonedInputControlls
}