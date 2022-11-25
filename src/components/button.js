const Button = (props) => {
  return (
    <div
      className={`${props.bg} mx-4 select-none p-6 ma sm:p-8 rounded-3xl cursor-pointer text-center font-bold text-xl`}
      onClick={props.clickHandler}
    >
      {props.text}
    </div>
  );
};

export default Button;
