//Challenge 1
//Find the error if any in the following code.

/*
import React, { useState, useEffect } from "react";
const Day2 = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <div>Loading....</div>;
  }
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://json/placeholder.typicode.com/todos/1");
      const resData = await res.json();
      setData(resData);
    };
    fetchData();
  }, []);
  return <di>{JSON.stringify(data)}</di>;
};
export default Day2;
*/
//we will get this error for the above code:
/*
Line 34:3:  React Hook "useEffect" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return? 
*/
//Solution: this code has an error useEffect is decleared after the if the block. We need to declare the hooks at the top all the Time. so write the use useEffect() above if block and we have setIsLoading(false) after getting the response

/******************* 
import React, { useState, useEffect } from "react";
const Day2 = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const resData = await res.json();
      setData(resData);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading....</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};
export default Day2;
***************************************************/

//Challenge 2
//Fix the issue with the counter.The issue is if we are in the browser the counter updates for every one second. if we move to next tabe or open some  just minimise it the updating just binks with values like 16 and then it becomes 20 like that

/*
import React, { useState, useEffect } from "react";
const Day2 = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    setInterval(()=>{
      setCount(count+1);
    },1000)
  }, [count]);
  return <h2>Timer :{count}</h2>;
};
export default Day2;
*/
/*
The issue with this code is that the dependency array in the useEffect hook is incorrect.

The dependency array [count] specifies that the effect should re-run only when the value of count changes. 
However, in this case, the effect is updating the value of count with setCount(count + 1), 
which means that the effect will run repeatedly in an infinite loop.

To fix this issue, you should remove the count dependency from the useEffect hook, and
update the setInterval callback function to use the previous state value of count instead of the 
current value. Here's the updated code:*/

//Corcetd code:
import React, { useState, useEffect } from "react";

const Day2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <h2>Timer: {count}</h2>;
};

export default Day2;
//Explanation:
/*
In the updated code, the useEffect hook is now only called once when the component is mounted, 
and the setInterval callback function correctly updates the count by using the previous count value. 
The clearInterval function is also used to clean up the interval when the component unmounts.
*/
