import React from 'react'

class UnControlledComponent extends React.Component{
  inputRef = React.createRef();

  render(){
    console.log('init render', this.inputRef)
    return(
      <div>
        <input ref={this.inputRef}/>
        <button onClick={this.click}>전송</button>
      </div>
    )
  }

  
  componentDidMount() {
    console.log('componentDidMount', this.inputRef)
  }

  click = ()=>{
    // input 엘리먼트의 현재 상태 값을 꺼내서 전송
    // const input = document.querySelector('#my-input')
    // console.log(input.value);

    console.log(this.inputRef.current.value)
  }
}
 
export default UnControlledComponent; 