import { useState, useMemo, useCallback } from "react"

function sum(persons){
  console.log('sum...')
  return persons.map(person=>person.age).reduce((l,r)=>l+r, 0)
}

export default function Example7(){

  const [value, setValue]  = useState('')
  const [persons] = useState([
    {name: 'codma', age:33},
    {name: 'nu', age: 28}
  ])

  const count = useMemo(()=>{
    return sum(persons)
  },[persons])
  
  // 함수를 2번째 인자에 맞춰 세팅
  const click = useCallback(()=>{
    console.log(value)
  },[])
  
  return (
    <div>
      <input value={value} onChange={change}/>
      <p>{count}</p>
      <button onClick={click}>click</button>
    </div>
  )

  function change(e){
    setValue(e.target.value)
  }
}