import React from 'react';
import {TestInterface} from 'types';
import {StartView} from "./components/StartView/StartView";

import './App.css';

export const App = () => {
  const foobar: TestInterface = {
    x: 123,
  };

  return (
    <StartView/>
  );
}
