import { useEffect, useState } from "react";

function AppFun() {
  const [count, setCount] = useState(false);
  useEffect(() => {
    console.log("模仿componentDidMount");
  }, []);
  useEffect(() => {
    console.log("模仿componentDidUpdate");
  }, [count]);
  useEffect(() => {
    return () => {
      console.log("模仿componentWillUnmount");
    };
  });
  return (
    <div>
      <button
        onClick={() => {
          setCount(!count);
        }}
      >
        强制刷新
      </button>
    </div>
  );
}

export default AppFun;
