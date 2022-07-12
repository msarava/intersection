import React, { useState } from 'react';
import calculateIntersection from '../lib/calculate.intersection';

function Intersection() {
  const [mealTime, setMealTime] = useState({ start: '', end: '' });
  const [coffeeTime, setCoffeeTime] = useState({ start: '', end: '' });
  const [results, setResults] = useState('');
  const handleClick = (e) => {
    e.preventDefault();
    console.log('intersection', calculateIntersection(mealTime, coffeeTime));
    setResults(calculateIntersection(mealTime, coffeeTime));
  };
  return (
    <div className='container'>
      <h1>Intersection</h1>
      <form id='form-container'>
        <div className='interval-container'>
          <label htmlFor='mealOrderStart'>Meal order starts at :</label>
          <input
            type='time'
            id='mealOrderStart'
            onChange={(e) =>
              setMealTime({ ...mealTime, start: e.target.value })
            }
          />
          <label htmlFor='mealOrderEnd'>Meal order ends at :</label>
          <input
            type='time'
            id='mealOrderEnd'
            onChange={(e) => setMealTime({ ...mealTime, end: e.target.value })}
          />
        </div>
        <div className='interval-container'>
          <label htmlFor='cofeeOrderStart'>Coffee order starts at :</label>
          <input
            type='time'
            id='cofeeOrderStart'
            onChange={(e) =>
              setCoffeeTime({ ...coffeeTime, start: e.target.value })
            }
          />
          <label htmlFor='cofeeOrderEnd'>Meal order ends at :</label>
          <input
            type='time'
            id='cofeeOrderEnd'
            onChange={(e) =>
              setCoffeeTime({ ...coffeeTime, end: e.target.value })
            }
          />
        </div>

        <button onClick={handleClick}>Calculate intersection</button>
      </form>
      <div>
        Result is : {results.start ? `${results.start} - ${results.end}` : results}
      </div>
    </div>
  );
}
export default Intersection;
