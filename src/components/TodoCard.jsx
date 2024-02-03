import { useState } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/actionTypes";
import { removeTodo, updateTodo } from "../redux/actions/todoActions";
import axios from "axios";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    axios
      .delete(`/todos/${todo.id}`)
      .then(() => dispatch(removeTodo(todo.id)))
      .catch(() => alert("silme isleminde bir sorun olustu"));
  };

  //store`daki todo`nun is_done degerini tersine cevir

  const handleStatus = () => {
    const updated = { ...todo, is_done: !todo.is_done };

    axios
      .put(`/todos/${todo.id}`, updated)
      .then(() => dispatch(updateTodo(updated)));

    dispatch(updateTodo(updated));
  };

  return (
    <div className="border shadow shadow-lg p-4 my-5">
      <h5>{todo.text}</h5>

      <h6>{todo.is_done ? "Tamamlandi" : "Devam Ediyor"}</h6>

      <p>{todo.created_at}</p>

      <button onClick={() => setIsOpen(true)} className="btn btn-primary">
        Düzenle
      </button>

      <button onClick={handleStatus} className="btn btn-success mx-3">
        {todo.is_done ? "Geri Al" : "Tamamla"}
      </button>

      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>

      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default TodoCard;
