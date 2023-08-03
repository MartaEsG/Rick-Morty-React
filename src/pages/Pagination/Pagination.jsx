

export default function Pagination({page, setPage}){
   
  return (
    <div>
    {page > 1 && <button onClick={() => setPage(page - 1)}>
        {"< anterior "} </button>}
    <span>  {page}  </span>
    {page <42 && <button onClick={() => setPage(page + 1)}>
        {"siguiente >"} </button>}
    </div>
  );
}


