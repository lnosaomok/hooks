import React, { useEffect, useState } from "react";
import "./App.css";

const UseEffect = () => {
  /////// Set state of number
  const [number, setNumber] = useState(0);

  /////// Set state of result
  const [result, setResult] = useState(0);

  //////// Set Value of number  as user types
  const changeNumber = (e) => {
    setNumber(e.target.value);
  };

  useEffect(() => {
    setResult(Math.cbrt(parseInt(number)));
  }, [number]);

  return (
    <div>
      <form class='cuberoot'>
        <div class=''>
          <div class='row'>
            <div id='cube'>
              <p>The cube root of </p>
              <input
                type='text'
                value={number}
                class='col s4'
                placeholder='enter number'
                autoComplete='off'
                onChange={(e) => {
                  changeNumber(e);
                }}
              />
              {""}
              <div class='col s1'>is</div>
              <textarea
                id='textarea1'
                class='materialize-textarea col s4'
                readOnly
                value={result}
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UseEffect;
