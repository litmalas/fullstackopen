import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Display = props => {
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.randomValue}</p>
    </div>
  );
};

const HandleVoteClick = props => {
  const [points, setPoints] = useState(
    Array.apply(null, Array(props.anecdoteValue.length)).map(
      Number.prototype.valueOf,
      0
    )
  );

  const twoArr = [];
  for (let i = 0; i < points.length; i++) {
    twoArr[i] = {
      points: points[i],
      names: props.anecdoteValue[i]
    };
  }
  const max = twoArr.reduce(function(prev, current) {
    if (+current.points > +prev.points) {
      return current;
    } else {
      return prev;
    }
  });

  if (props.randomValue === props.anecdoteValue[0]) {
    return (
      <div>
        <p>has {points[0]} votes</p>
        <Button
          handleClick={() => {
            let newPoints = [...points];
            newPoints[0] += 1;
            setPoints(newPoints);
          }}
          text="vote"
        />
        <h1>Anecdote with the most votes</h1>
        <p>{JSON.stringify(max.names)}</p>
        <p>has {JSON.stringify(max.points)} votes</p>
      </div>
    );
  } else if (props.randomValue === props.anecdoteValue[1]) {
    return (
      <div>
        <p>has {points[1]} votes</p>
        <Button
          handleClick={() => {
            let newPoints = [...points];
            newPoints[1] += 1;
            setPoints(newPoints);
          }}
          text="vote"
        />
        <h1>Anecdote with the most votes</h1>
        <p>{JSON.stringify(max.names)}</p>
        <p>has {JSON.stringify(max.points)} votes</p>
      </div>
    );
  } else if (props.randomValue === props.anecdoteValue[2]) {
    return (
      <div>
        <p>has {points[2]} votes</p>
        <Button
          handleClick={() => {
            let newPoints = [...points];
            newPoints[2] += 1;
            setPoints(newPoints);
          }}
          text="vote"
        />
        <h1>Anecdote with the most votes</h1>
        <p>{JSON.stringify(max.names)}</p>
        <p>has {JSON.stringify(max.points)} votes</p>
      </div>
    );
  } else if (props.randomValue === props.anecdoteValue[3]) {
    return (
      <div>
        <p>has {points[3]} votes</p>
        <Button
          handleClick={() => {
            let newPoints = [...points];
            newPoints[3] += 1;
            setPoints(newPoints);
          }}
          text="vote"
        />
        <h1>Anecdote with the most votes</h1>
        <p>{JSON.stringify(max.names)}</p>
        <p>has {JSON.stringify(max.points)} votes</p>
      </div>
    );
  } else if (props.randomValue === props.anecdoteValue[4]) {
    return (
      <div>
        <p>has {points[4]} votes</p>
        <Button
          handleClick={() => {
            let newPoints = [...points];
            newPoints[4] += 1;
            setPoints(newPoints);
          }}
          text="vote"
        />
        <h1>Anecdote with the most votes</h1>
        <p>{JSON.stringify(max.names)}</p>
        <p>has {JSON.stringify(max.points)} votes</p>
      </div>
    );
  } else if (props.randomValue === props.anecdoteValue[5]) {
    return (
      <div>
        <p>has {points[5]} votes</p>
        <Button
          handleClick={() => {
            let newPoints = [...points];
            newPoints[5] += 1;
            setPoints(newPoints);
          }}
          text="vote"
        />
        <h1>Anecdote with the most votes</h1>
        <p>{JSON.stringify(max.names)}</p>
        <p>has {JSON.stringify(max.points)} votes</p>
      </div>
    );
  }
};

const App = props => {
  const [selected, setSelected] = useState(0);
  const anecdoteValue = props.anecdotes;
  const randomValue =
    props.anecdotes[Math.floor(Math.random() * props.anecdotes.length)];

  return (
    <div>
      <div>
        <Display randomValue={randomValue} />
        <HandleVoteClick
          randomValue={randomValue}
          anecdoteValue={anecdoteValue}
        />
        <Button
          handleClick={() => setSelected(selected + 1)}
          text="next anecdote"
        />
      </div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
