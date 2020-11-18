import React, { useState } from "react";

const UseState = () => {
  /////// Set state of number
  const [number, setNumber] = useState(0);

  /////// Set state of result
  const [result, setResult] = useState(null);

  //////// Set Value of number  as user types
  const changeNumber = (e) => {
    setNumber(e.target.value);
  };

  const getCubeRoot = (e) => {
    e.preventDefault();
    setResult(Math.cbrt(parseInt(number)));
  };

  return (
    <div>
      <div class='cube'>
        <form
          class='col s12 cuberoot'
          onSubmit={(e) => {
            getCubeRoot(e);
          }}
        >
          <div class='row'>
            <div class='input-field col s6'>
              <input
                type='text'
                value={number}
                onChange={(e) => {
                  changeNumber(e);
                }}
                class='validate'
                placeholder='enter number'
                autoComplete='off'
              />
            </div>

            <div class='input-field col s6'>
              <input type='submit' class='btn ' value='Get Cube Root' />
            </div>
          </div>
        </form>
      </div>
      {result !== null ? (
        <p>
          The cube root of <strong>{number}</strong> is <em>{result}</em>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default UseState;
