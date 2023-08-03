import { useForm } from "react-hook-form";

export default function ContactPage(){
    const {handleSubmit, register} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Name
                <input type="text" {...register("name")}/>
            </label>
            <label>
                Email
                <input type="email" {...register("email")}/>
            </label>
            <label>
                Descripción
                <textarea {...register("descripcion")}/>
            </label>
            <label>
                Selecciona:
                <select {...register("select")}>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                </select>
            </label>
            <button>Enviar</button>
        </form>
        </div>
}