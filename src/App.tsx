import React, { ReactElement, ReactNode, useState } from 'react';
import './App.css';


function Header({title,children}:{title:string,children:ReactNode}){
  return(<>
  <h1>This is a {title}</h1>
  <div>{children}</div>
  </>
  )

}
const defaultHeaderProps = {
  title:"Hello World",
}
type HeaderProps={title:string,children:ReactNode} &typeof defaultHeaderProps;

function Headingwithdefaultprops({title,children}:HeaderProps):ReactElement{
  return(<>
    <h1>This is a {title}</h1>
    <div>{children}</div>
    </>
    )
}
Headingwithdefaultprops.defaultProps=defaultHeaderProps;


function PremSagar({title,children}:{title?:string,children:ReactNode}){
  return(
    <>
    {title && <h1>This is the {title}</h1>}
    <>{children}</>
    </>


  )
}

function Counter({children}:{children:(num:number)=>ReactNode}) {
const [state,stateSet]=useState<number>(1);
return(
  <div>
    <div>
    {children(state)}
    </div>
  <button onClick={()=>stateSet(state+1)}>Increment</button>



  </div>

)
}

function List<ListItem>({items,render}:{items:ListItem[],render:(item:ListItem)=>ReactNode}){
  return(
    <ul>
      {items.map((item,index)=>(
        <li key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}

class MyHeader extends React.Component<{
  title:ReactNode,
}>{
  render(){
return(
  <h1>{this.props.title}</h1>
)
  }
}






function App() {
  return (
    <div >
      <Header title={"Prem Sagar"} children={<>LOL</>}></Header>
      <Headingwithdefaultprops>
        <>Prem Sagar</>
      </Headingwithdefaultprops>
      <PremSagar title={"Hi Sagar"}><>Hello There</></PremSagar>
      <Counter>{(num:number)=><>the number is {num}</>}</Counter>
      <List items={["Prem","teja","Kia"]} render={(item:string) =><>{item.toLowerCase()}</>}></List>
      <MyHeader title={"My Head is classcomponenet"}></MyHeader>
    </div>
  );
}

export default App;
