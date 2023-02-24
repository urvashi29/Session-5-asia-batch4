import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectHook = () => {
  const [post, setPost] = useState([]);

  // componentDidMount
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";

    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    //   axios.post(url, {}).then().catch()
  }, []);

  //   componentDidUpdate
  //   useEffect(() => {

  //   }, [post]);

  // componentWillUnmount
  useEffect(() => {
    console.log("added resource");

    return () => {
      console.log("remove resource");
    };
  }, [post]);

  return <div>
    Hello
  </div>;
};

export default UseEffectHook;
