import { render } from '@testing-library/react';
import React, {useState} from 'react'
class Checkbox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checked: false
        }
    }
 //   const [checked, setCheck] = useState(false);
    
onChangeHandle =  () => {
     this.setState({checked: !this.state.checked});
    // console.log(this.state.checked);
   }
  
       render(){
              var msg;
              if(this.state.checked) {
                msg = 'checked';
                this.state.checked = true;
             } else {
                 msg = 'unchecked';
                this.state.checked = false;
            }
              return (
                <div>
                    <input type="checkbox"  onChange={this.onChangeHandle} />
                    <p>the box is {msg}</p>
                </div>
            )
       }
 
}

export default Checkbox
