# React-useState-useEffect

## useState


Use of state in common class components

```js
export default class Example extends React.Component{
  state = {count: 0}


  render(){
    const {count} = this.state
    return(
      <div>
        <p>You clicked {count} times</p>
        <button onClick={this.click}>Click me</button>
      </div>
    )
  }

  click = ()=>{
    this.setState({count: this.state.count + 1})
  }
}

```

Use of state in function components

```js

export default function Example(){
  const [count, setCount] = React.useState(0);
  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click(){
    setCount(count+1)
  }
}

```

```js
  const [count, setCount] = React.useState(0);
```

<strong>count</strong> is a state, <strong>setCount</strong> is a function that changes count.
argument of <strong>useState</strong> means initial value of <strong>count</strong> 


## useEffect
  
Implementing lifecycles in function components

```js
export default function Example(){
  const [count, setCount] = React.useState(0);


  React.useEffect(()=>{
    console.log('componentDidMount & componentDidUpdate by count',count)

  }, [count])

  return(
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click(){
    setCount(count+1)
  }
}
```

```js
 React.useEffect(function, value)
 ```
 
Execute function when value is updated
Simultaneously performs the roles of 
<strong>componentDidMount</strong> and <strong>componentDidUpdate</strong>
 
  
