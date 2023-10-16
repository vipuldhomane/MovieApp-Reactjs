import headStyle from "./HeadingOne.module.css";
function HeadingOne() {
  return (
    <div className="wrapper">
      <h1>Heading1</h1>
      <button className={headStyle.headBtn}>Button 1</button>
    </div>
  );
}

export default HeadingOne;
