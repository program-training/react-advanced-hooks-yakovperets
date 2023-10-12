import { useState } from "react";

export const useCountTargets = (initial: number) => {
  const [times, setTimes] = useState(0);
  return { times, setTimes };
};
