import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const leftStyle = {
  align: "left",
  textAlign: "left"
};

const textStyle = {
  width: "50px",
  align: "left",
  textAlign: "left"
};

const valueStyle = {
  width: "30px",
  align: "left",
  textAlign: "left"
};

const tableStyle = {
  width: "160px",
  tableLayout: "fixed"
};

const Statistic = props => {
  return (
    <table style={tableStyle}>
      <tbody>
        <tr>
          <td style={textStyle}>{props.text}</td>
          <td style={valueStyle}>{props.value}</td>
          <td style={leftStyle}>{props.percent}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics = props => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <Statistic text="good" value={props.good} />
      <Statistic text="neutral" value={props.neutral} />
      <Statistic text="bad" value={props.bad} />
      <Statistic text="all" value={props.good + props.bad + props.neutral} />
      <Statistic
        text="average"
        value={props.average / (props.good + props.bad + props.neutral)}
      />
      <Statistic
        text="positive"
        value={(props.good / (props.good + props.bad + props.neutral)) * 100}
        percent="%"
      />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleClick={() => {
          setGood(good + 1);
          setAverage(average + 1);
        }}
        text="good"
      />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button
        handleClick={() => {
          setBad(bad + 1);
          setAverage(average - 1);
        }}
        text="bad"
      />
      <Statistics good={good} neutral={neutral} bad={bad} average={average} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
