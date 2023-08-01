import { useState } from "react";

export default function Pagination(){
    
    const [page, setPage] = useState(1);

    function newPage (page){
        setPage(page)
    }

  return (
    <div>
    {page > 1 && <button onClick={() => newPage(page - 1)}>
        {"< anterior "} </button>}
    <span>  {page}  </span>
    <button onClick={() => newPage(page + 1)}>
        {"siguiente >"} </button>
    </div>
  );
}

    
