import React, {useEffect, useState} from 'react';


const withData = (WrappedComponent) =>{
  
  return ({dataSource}) =>{
    const [data, setData] = useState([])
    useEffect(()=>{
      fetch(dataSource)
        .then(response=> response.json())
        .then(data=>setData(data))
    },[dataSource])

    return <WrappedComponent data={data}/>
  }
}

export default withData