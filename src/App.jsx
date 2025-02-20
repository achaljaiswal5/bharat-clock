import ClockHeading from "./component/ClockHeading";
import ClockSlogan from "./component/ClockSlogan";
import "./App.css";
import CurrentTime from "./component/CurrentTime";
const App = () => {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <ClockHeading />
        <ClockSlogan />
        <CurrentTime />
      </div>
    </div>
  );
};
export default App;
