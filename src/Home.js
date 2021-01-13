import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setblogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("faild");
          }
          return res.json();
        })
        .then((data) => {
          setblogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}

      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs!" />}
    </div>
  );
};

export default Home;
