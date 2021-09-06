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
 
  
## useHistory

The useHistory hook gives you access to a history instance that can be used for scrolling.

ex)
```js
function Index() {            
  let history = useHistory();   // init history
  
  function handleClick(){     
    history.push('/home');      // execute push function
```


## useParams

useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.  
Easier value management
  
ex)
```js
  function BlogPost() {
  let { slug } = useParams();                // Assign the object of useParams to the sulg variable
  return <div>Now showing post {slug}</div>; // 
}
```

## How to share data across subcomponents?
[React context](https://ko.reactjs.org/docs/context.html)

data set -> create context -> use context or provider -> use value
  
  
  
Component that gives data
```js
const PersonContext = React.createContext();
export default PersonContext;
```
  
index.js
```js
const persons = [
  {id: 0, name: 'codma', age:33},
  {id: 2, name: 'nu', age: 19}
];
  
  
Using components that give data
### Provider


<PersonContext.Provider value={persons}>
  <App />
</PersonContext.Provider>
```
Components in Provider can use value
  

### Consumer
```js
export default function Example1(){
  return(
  <PersonContext.Consumer>
    {(persons)=><ul>{persons.map(person=><li>{person.name}</li>)}</ul>}
  </PersonContext.Consumer>
  )
}

```
  
### contextType
```js
export default class Example2 extends React.Component{
  static contextType = PersonContext;

  render() {
    const persons = this.context 
    return(
      <ul>{persons.map((person)=>(<li>{person.name}</li>))}
      </ul>
    )
  }
}

Example2.contextTypes = PersonContext;
```
  

  
### useContext
  
  
```js
export default function Example1(){
  const persons = useContext(PersonContext);
  return(
    <ul>{persons.map(person=><li>{person.name}</li>)}</ul>
  )
}
```
