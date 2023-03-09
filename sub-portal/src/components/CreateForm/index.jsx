import "./index.css"

export default function CreateForm (){
  const onSubmit = () => {
    alert("submit");
  };
  return (
    <form className="create-form" action="" onSubmit={onSubmit}>
      <input />
      <input type="submit" />
    </form>
  );
};
