import './App.css';
import {useState} from "react";
import ToDoList from "./Components/ToDoList";

function App() {
    const [listItem, setListItem] = useState('');
    const [items, setItems] = useState([]);
    const onChangeEvent = (event) => {
        setListItem(event.target.value);
    }
    const listOfItems = () => {
        if (listItem == null || listItem.trim() === '' || !listItem){
            alert('Enter something first.')
            return false;
        }
        setItems((oldItems) => {
            return [...oldItems, listItem];
        });
        setListItem('');
    }
    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrayElement, index) => {
                return index !== id;
            });
        });
    }
    return (
        <>
            <div className="main_div">
                <div className="box">
                    <h1>ToDO List</h1>
                    <div className="row">
                        <div className="col-10">
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="item"
                                    id="item"
                                    autoComplete="off"
                                    value={listItem}
                                    onChange={onChangeEvent}
                                />
                                <label htmlFor="item">Enter Something</label>
                            </div>
                        </div>
                        <div className="col-2">
                            <button className="add-button" title="Add" onClick={listOfItems}>+</button>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-12">
                            <ul className="todo-list">
                                {items.map((item, index) => {
                                    return (
                                        <ToDoList
                                            item={item}
                                            index={index}
                                            key={index}
                                            deleteItem={deleteItem}
                                        />
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
