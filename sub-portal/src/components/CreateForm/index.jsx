import { useState } from "react";
import "./index.css";

export default function CreateForm() {
  const onSubmit = () => {
    console.log("submit");
  };

  const [visible, setVisible] = useState(false);
  const onShowCreate = (isShow = true) => {
    setVisible(isShow);
  };
  return (
    <>
      <button onClick={onShowCreate}>创建</button>
      <dialog open={visible}>
        <form className="create-form" action="" onSubmit={onSubmit}>
          <input />
          <input type="submit" />
        </form>
        <div>
          <button onClick={() => onShowCreate(false)}>Cancel</button>
          <button onClick={() => onShowCreate(false)}>
            Confirm
          </button>
        </div>
      </dialog>
    </>
  );
}
