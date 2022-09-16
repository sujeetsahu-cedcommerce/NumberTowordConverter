import React, { useState } from "react";

const Numbertoword = () => {
  const oneTwoTwenty = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  const twentyToNinety = [
    "twenty",
    "thirty",
    "fourty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  const hundredToCrore = [" hundred ", " thousand ", " lakh ", " crore "];

  const [inp, setInp] = useState(0);
  const [res1, setRes] = useState("");

  const onedigit = (num) => {
    for (let i = 0; i < oneTwoTwenty.length; i++) {
      if (i === num) {
        return oneTwoTwenty[i];
      }
    }
  };

  const twodigit = (num) => {
    let temp = String(num);
    if (Number(temp === 0)) {
      return "";
    }
    if (Number(temp < 20)) {
      return oneTwoTwenty[num];
    } else {
      return (
        twentyToNinety[Number(temp[0]) - 2] + oneTwoTwenty[Number(temp[1])]
      );
    }
  };

  const convert = () => {
    let data = String(inp);
    let s = data.split("");
    let res = "";
    let counter = 0;
    for (let i = s.length - 1; i > -1; i--) {
      if (counter === 3) {
        res += ",";
      }
      if (counter % 2 === 1 && counter > 3) res += ",";
      counter++;
      res += String(s[i]);
    }
    res = res.split(",");
    let fres = "";

    for (let i = 0; i < res.length; i++) {
      let current = String(res[i].split("").reverse())
        .replace(",", "")
        .replace(",", "");
      if (i === 0) {
        if (Number(current) < 100) {
          fres += twodigit(Number(current));
        } else {
          console.log(
            oneTwoTwenty[Number(current[0])] +
              hundredToCrore[i] +
              twodigit(Number(current[1] + current[2]))
          );
          fres +=
            oneTwoTwenty[Number(current[0])] +
            hundredToCrore[i] +
            twodigit(Number(current[1] + current[2]));
        }
      } else {
        if (Number(current) !== 0) {
          fres = twodigit(current) + hundredToCrore[i] + fres;
        }
      }
    }
    setRes(fres);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="enter number"
        onChange={(e) => setInp(Number(e.target.value))}
      />
      <button onClick={convert}>Convert</button>
      <p>Answer :{res1}</p>
    </div>
  );
};

export default Numbertoword;
