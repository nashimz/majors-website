import './Series.css'

import { useParams } from 'react-router-dom';





function SeriesId() {
    let params = useParams();
    console.log(params.id); 
    return ( <div>{params.id}</div>)
  }

  
  export default SeriesId;