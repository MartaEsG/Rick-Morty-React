import { useForm } from "react-hook-form";

export default function SearchForm({ setFilter}){
    const { handleSubmit, register,  } = useForm();

    const doOnSubmit = (data) => {
        setFilter(data.name)
    }

    return <form onSubmit={handleSubmit(doOnSubmit)}>
        <input type="text" {...register("name")} />
        <button>Search</button>
    </form>
}