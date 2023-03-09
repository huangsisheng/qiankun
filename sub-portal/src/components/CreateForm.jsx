const CreateForm = () => {
  const onSubmit = () => {
    alert('submit')
  }
  return <div>
    <form action="" onSubmit={onSubmit}>
      <input />
      <input type="submit" />
    </form>
  </div>;
};

export default CreateForm;
