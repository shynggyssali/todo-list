function Button(props) {
  function handleClick() {
    props.add();
  }
  return (
    <>
      <button type="submit" className="add-btn" onClick={handleClick}>
        ➕
      </button>
    </>
  );
}

export default Button;
