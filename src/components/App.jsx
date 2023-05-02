// import Feedback from './feedback/Feedback';
import React, { useState } from 'react';
import SectionTitle from './sectionTitle/SectionTitle';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';

const App = ()=> {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 

  const percentCalc = () => {
    return (
      (good * 100) /
      (good + neutral + bad)
    );
  };

  const totaCalc = () => {
    return (good + neutral + bad);
  };

  const onLeaveFeedback = buttonName => {
switch (buttonName){
case 'good':
  setGood((prev)=>prev+1)
  break;
  case 'neutral':
  setNeutral((prev)=>prev+1)
  break;case 'bad':
  setBad((prev)=>prev+1)
  break;
  default:
      console.log(`Unknown button: ${buttonName}`);
}

  };

  
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
           onLeaveFeedback={onLeaveFeedback}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {totaCalc() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totaCalc()}
              positivePercentage={Math.round(percentCalc())}
            />
          )}
        </SectionTitle>
      </div>
    );
          }


export {App}