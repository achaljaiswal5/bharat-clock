import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const Intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(Intervalid);
    };
  }, []);

  return (
    <>
      <p className="showtime">
        This is the Current Time : {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </p>
    </>
  );
};

export default CurrentTime;
