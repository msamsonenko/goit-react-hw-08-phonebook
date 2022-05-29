const Form = ({ arr }) => {
  let id = 0;
  return (
    <>
      this is a form
      <form>
        {arr.map(item => {
          return (
            <>
              <label key={id + 1}>
                {item}
                <input
                  type="text"
                  name={item}
                  value={''}
                  required
                  //   onChange={handleInputChange}
                  autoComplete="off"
                />
              </label>
            </>
          );
        })}
      </form>
    </>
  );
};
export default Form;
