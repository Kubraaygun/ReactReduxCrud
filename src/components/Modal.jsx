import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/actionTypes";

const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newText = e.target[1].value;
    const updated = { ...todo, text: newText };

    dispatch({
      type: ActionTypes.UPDATE_TODO,
      payload: updated,
    });
    close();
  };
  return (
    <div
      className="modal d-block text-dark bg-black bg-opacity-50"
      tabindex="-1"
    >
      <div className="modal-dialog moda-dialog centered" modal-dialog-centered>
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todo'yu Düzenle</h5>
            <button
              type="button"
              className="btn-close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">
            <label>Yeni Baslik</label>
            <input
              defaultValue={todo.text}
              className="form-control shadow mt-2"
              type="text"
            />
          </div>
          <div className="modal-footer">
            <button onClick={close} type="button" className="btn btn-secondary">
              Vazgec
            </button>
            <button type="submit" className="btn btn-primary">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
