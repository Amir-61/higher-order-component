import {useEffect, useState} from 'react';

const useFetch = (DataSourceUrl) => {
  const [data, setData] = useState([])
  useEffect(()=> {
    fetch(DataSourceUrl)
    .then(response=> response.json())
    .then(data=>setData(data))
  },[])

  return data
}

export default useFetch;