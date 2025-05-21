'use client'
import { CountUp } from "countup.js";
import { useEffect } from "react";
const Counter = (props) => {

    const { point } = props;

  useEffect(() => {
    const options = {
      startVal: 0,
      endVal: point,
      duration: 4, // длительность анимации в секундах
      separator: '', // разделитель тысяч
      decimal: '.', // десятичный разделитель
      enableScrollSpy: true, // включить прокрутку
      scrollSpyOnce: false, // анимация сработает только один раз
    };
    const counter = new CountUp('counter', options.endVal, options);
    counter.start();
  }, [point]);

  return <div id="counter">0</div>;
};

export default Counter;