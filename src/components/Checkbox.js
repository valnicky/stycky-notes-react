import React, {useState} from 'react'

function Checkbox() {
    const [checked, setCheck] = useState(false);
    
function onChangeHandle  () {
 //    this.setCheck(!this.checked);
     console.log(checked);
 
   }
    
   let msg;
        if(checked) {
       msg = 'checked';
     //   setCheck(true);
   } else {
       msg = 'unchecked';
    //    setCheck(false);
   }
  
       
    return (
        <div>
            <input type="checkbox" onChange = {(e) => (onChangeHandle(e))} />
            <p>the box is {msg}</p>
        </div>
    )
}

export default Checkbox
