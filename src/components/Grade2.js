import React, { useState } from 'react';

const Grade2 = () => {
  const [score, setScore] = useState('');
  const [grade, setGrade] = useState('');

  const calculateGrade = () => {
    const Number = parseFloat(score);

    if (!isNaN(Number)) { 
              //  is used to check the parsed value if is valid
      if (Number < 40) {
        setGrade('Fail');
      } else if (Number >= 40 & Number <= 49) {
        setGrade('D');
      } else if (Number >= 50 & Number <= 59) {
        setGrade('C');
      } else if (Number >= 60 & Number <= 69) {
        setGrade('B');
      } else {
        setGrade('A');
      }
    } else {
      setGrade('Invalid Input');
    }
  };

  return (
    <div>
      <h1>Grading System</h1>
      <div>
        <label>Enter Score: </label>
        <input
          type="text"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
      </div>
      <button onClick={calculateGrade}>Calculate Grade</button>
      <div>
        <p>Grade: </p>
        {grade}
      </div>
    </div>
  );
};

export default Grade2;
