import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";
import axios from "axios";

const AddForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;

    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };

    axios.post("/todos", newTodo).then(() => {
      dispatch(addTodo(newTodo));
    });

    // console.log(newTodo)

  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-1 my-5">
      <input
        placeholder="Örn: Typescript Projesi Yap"
        className="form-control"
        type="text"
      />
      <button className="btn btn-warning">Ekle</button>
    </form>
  );
};

export default AddForm;
