import { Props } from "../interfaces"
import { RiDeleteBin6Fill } from "react-icons/ri";

const TodoItem = ({ task, completeTask }: Props) => {
    return (
        <div className="todoItem outline-none bg-transparent border border-gray-200 p-2 w-[600px] text-gray mb-4 rounded">

            <div className="flex justify-between items-center">
                <p className="text-gray-700">{task.text.trim().toLowerCase()}</p>

                <div className="flex items-center justify-between gap-x-2">

                    <button className="flex items-center justify-around w-[90px] px-2 py-2 bg-gray-200 text-red-500 rounded hover:bg-red-500 hover:text-white" onClick={() => { completeTask(task.text) }}><RiDeleteBin6Fill /> Delete</button>
                </div>
            </div>

        </div>

    )
}
export default TodoItem