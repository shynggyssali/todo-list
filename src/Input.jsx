function Input(props) {
  function handleChange(e) {
    e.preventDefault();
    props.setInputText(e.target.value);
    props.setTemp(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      props.add();
    }
  }
  return (
    <>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="add item..."
        value={props.inputText}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

export default Input;
