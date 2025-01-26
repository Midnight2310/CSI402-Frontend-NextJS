const TextInput = ({
    labelText,
    inputId,
    defaultValue,
    onChange,
  }: {
    labelText: string;
    inputId: string;
    defaultValue?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange?: any;
  }) => {
    return (
      <div
        style={{ backgroundColor: "lightblue" }}
        className="border-2 border-black rounded-lg"
      >
        <label style={{ color: "red" }}>{labelText}</label>
        <input
          id={inputId}
          defaultValue={defaultValue}
          onChange={onChange}
          style={{ color: "blue" }}
          className="border-2 border-black rounded-lg"
        />
      </div>
    );
  };
  
  export default TextInput;