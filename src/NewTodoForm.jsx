import { useState } from "react";

export default function NewTodoForm({onSubmit}){
    
    const [newItem, setNewItem] = useState("");

    function hundleSubmit(e)
    {
        e.preventDefault();
        if(newItem === "") return;
        
        onSubmit(newItem);

        setNewItem("");
    }

    return (
        <form onSubmit={hundleSubmit} className="new-item-form">
                <div className="form-row">
                    <label htmlFor="item">New Item</label>
                    <input value = {newItem} onChange={e => setNewItem(e.target.value)} type="text" id = "item"/>
                </div>
                <button className="btn">Add</button>
        </form>
    )
}