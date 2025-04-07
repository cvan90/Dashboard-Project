import {useEffect, useState} from "react"

const temparary_todo_items=[
  {id:1,name:"item one", completed:false},
  {id:2,name:"item two", completed:false},
  {id:3,name:"item three", completed:true},
  {id:4,name:"item four", completed:false},
  {id:5,name:"item five", completed:false}
]

function Home(){

const [tmplist,setTmpList]=useState(temparary_todo_items);
const [todolist,setTodoList]=useState(null);
const [txtitem, setItem] = useState("")
const [msgText,setMsg] = useState("")


const btnclick= (e) =>{
  e.preventDefault();
    
    if(txtitem === null ||  txtitem.trim().length === 0)
    {
        setMsg(`---Please Enter a Valid item to be Added---`);
        return true;
    }
        const _newitem = {id:new Date().getTime(),name:txtitem,completed:false};

        setTmpList((prevval)=>{
  
            const _lst = [...prevval,_newitem]
            setTodoList((prevval)=>[..._lst]);    
            return _lst;
        });
  setMsg("Item Added");
  setItem("");
}
function DeleteItem(e,id){

  e.preventDefault()

  if (!window.confirm("delete item?")){
    return false;
    
  }
  setTmpList((prevval)=>{
    const _lst = [...prevval]
    
    const _index = _lst.findIndex((item)=>{
      if (item.id == id)
      {
        return true;
      }
    })

    if(_index !=-1)
    {
      _lst.splice(_index,1)
    }

    setTodoList((prevval)=>[..._lst]);    
    return _lst;
  });

  setMsg(`--Item Deleted---${id}`)
}
const filterAll = (e) => {

  e.preventDefault();

  const filteredlist = tmplist;
    
  setTodoList(filteredlist);
}
const filterComplete = (e) => {

  e.preventDefault();

  const filteredlist = tmplist.filter((item)=>{
      return item.completed
  })

  setTodoList(filteredlist);
}
const filterIncomplete = (e) => {

  e.preventDefault();

  const filteredlist = tmplist.filter((item)=>{
      return !item.completed
  })

  setTodoList(filteredlist);
}
const ItemToggle = (e, id) => {


  let _lst1 = tmplist.map((item)=>{
      return   (item.id == id)?                  
            {...item,completed:!item.completed}
        :
            {...item};                
    });

    let _lst2 = todolist.map((item)=>{
      return   (item.id == id)?                  
            {...item,completed:!item.completed}
        :
            {...item};                
    });

  setTmpList(_lst1);
  setTodoList(_lst2);

  setItem("");

}

  useEffect(()=>{

  console.log("---Home Page Loaded---")
  
  setTodoList(tmplist)
  console.log("---Temparary list---\n",tmplist)
  console.log("---To-Do List---\n",todolist)

},[])

      return (
    
        <>
        <br></br>
        <div className="app-center-page">
            <h2>To-Do List</h2>
            </div>
        <br></br>
          <div className="app-center-page">
      <input value={txtitem} type="text"
       onChange={(e)=>setItem(e.target.value)}
      placeholder="Enter Item to be Added "/>
      {" "}
    <button onClick={btnclick}>Add</button>{" "} <a href="#" onClick={()=> {setItem(""); setMsg("")}}>Clear</a>
    <p>{msgText}</p>
    <p> Filter:&nbsp;&nbsp;
        <a href="#" onClick={filterAll}>All</a> {" | "}
        <a href="#" onClick={filterComplete}>Complete</a> {" | "}
        <a href="#" onClick={filterIncomplete}>Incomplete</a> 
    </p>
    </div>
    <div className="app-center-page">
            {todolist && todolist.map((item)=>
              <p key={item.id}>{
                <>
                   <input onChange={(e)=>ItemToggle(e,item.id)} type="checkbox" checked={item.completed}/>{" "}
                    {" "}
                    <span key={item.id} style={{'text-decoration':(item.completed)?"line-through":""}}>{item.name}</span>
                    {" "}
                   <button onClick={(e)=>DeleteItem(e,item.id)}>x</button>
                </>}
              </p>)}
    </div>
    <div>
      <footer>Footer @ 2025</footer>
    </div>
        </>
      );
    }

    export default Home;