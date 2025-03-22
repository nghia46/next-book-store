'use client'
import React from "react";
import useCounterStore from "../store/testStore";

export default function About() {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <div>
      <h1>About Page</h1>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
