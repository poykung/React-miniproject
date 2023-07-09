import { TbEdit } from "react-icons/tb";
import { BsTrash } from "react-icons/bs";

const List=({id,title,removeItem,editItem})=>{
    return(
        <div className="list-item">
            <p className="title">{title}</p>
            <div className="button-conatiner">
                <button onClick={()=>editItem(id)} className="btn"><TbEdit/></button>
                <button onClick={()=>removeItem(id)} className="btn"><BsTrash/></button>

            </div>
        </div>
    )
}

export default List