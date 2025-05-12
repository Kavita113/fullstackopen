import { useState } from "react";

const Heading = (props) => <h1>{props.heading}</h1>;

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ good, bad, neutral }) => {
  const total = good + bad + neutral;
  const average = total
    ? ((good * 1 + neutral * 0 + bad * -1) / total).toFixed(2)
    : 0;
  const positive = total ? ((good / total) * 100).toFixed(2) : 0;

  return (
    <>
      {total ? (
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="Neutral" value={neutral} />

            <StatisticLine text="All" value={total} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positive" value={`${positive}%`} />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};
function App() {
  const [bad, setBad] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const handleBadClick = () => setBad(bad + 1);
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);

  return (
    <div>
      <Heading heading="Give feedback" />
      <Button text="Good" onClick={handleGoodClick} />
      <Button text="Bad" onClick={handleBadClick} />
      <Button text="Neutral" onClick={handleNeutralClick} />

      <Heading heading="Statistics" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
