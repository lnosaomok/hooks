import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const UseRef = () => {
  const [isMatch, setIsMatch] = useState(true);
  const [input, setInput] = useState("");

  const inputRef = useRef();
  const submitRef = useRef();
  const submitCountRef = useRef(0);
  const helperRef = useRef("");

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let correctEmail = "test@test.com";

  const onChange = (e) => {
    setInput(e.target.value);
    setIsMatch(re.test(String(input).toLowerCase()));
  };

  useEffect(() => {
    if (!isMatch) {
      inputRef.current.id = "ref-error";
      submitRef.current.disabled = true;
      helperRef.current.id = "error";
      helperRef.current.innerHTML = "Invalid Email";
    } else {
      inputRef.current.id = "";
      submitRef.current.disabled = false;
      helperRef.current.innerHTML = "";
      helperRef.current.id = "";
    }
  }, [isMatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (input !== correctEmail) {
      submitCountRef.current += 1;
      helperRef.current.innerHTML = `email does not exist, you have ${
        3 - submitCountRef.current
      } tries left`;
      helperRef.current.id = "error";
      console.log(submitCountRef.current);
    }
    if (submitCountRef.current === 3) {
      alert("You have reached limit for number of attempts");
      inputRef.current.disabled = true;
      submitRef.current.disabled = true;
      helperRef.current.innerHTML = "";

      return;
    }
  };

  return (
    <form
      class='cuberoot'
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
      <div class='col s11'>
        <div class='row'>
          <div class='input-field earchBar'>
            <div class='col s6'>
              {" "}
              <i class='material-icons prefix'>email</i>
              <input
                type='text'
                name='search'
                placeholder='enter email'
                autocomplete='off'
                value={input}
                ref={inputRef}
                onChange={(e) => {
                  onChange(e);
                }}
              />
              <span class='helper-text' ref={helperRef}></span>
            </div>

            <button
              type='submit'
              class='btn-small teal'
              ref={submitRef}
              id='searchSubmit'
            >
              {" "}
              Submit
            </button>
          </div>
        </div>
      </div>
      <div class='col s1'></div>
    </form>
  );
};

export default UseRef;
