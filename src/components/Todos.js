import React, { useState } from 'react'

export default function Todos() {
    const [activity, setActivity] = useState("");
    const [listData, setlistData] = useState([]);
    function addActivity(){
       setlistData((listData)=>{
        const updatedList = [...listData, activity]
        console.log(updatedList)
        setActivity('');
        return updatedList
       })
    }

function deleteActivity(i){
const updatedListData = listData.filter((element, id)=>{
    return i!==id;
})
setlistData(updatedListData);
}

  return (
    <div className='container'>
        <div className='header'>TODO LIST</div>
        <input type='text' placeholder='Add TodoList' value={activity} onChange={(e) =>setActivity(e.target.value)} />
        <button onClick={addActivity}>Add</button>
        <p className='List-heading'>Here is the List</p>
        {listData!==[] && listData.map((data, i)=>{
            return (
                <>
                <p key={i}>
                    <div className='listData'>{data}</div>
                    <div className='btn-position'>
                    <button onClick={()=>deleteActivity(i)}>Delete</button>
                    </div>
                    

                </p>
                </>
            )
        })}
    
    </div>
  )
}
