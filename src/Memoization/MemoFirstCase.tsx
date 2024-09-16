import { format } from "date-fns";
import { getBackgroundColorFromTime } from "./utils";
import { Form } from "./OptimalFirstCase";
import { memo } from "react";
import { useTime } from "./FirstCase";

const PureFormComponent = memo(Form);

const Time = ({ time }: { time: Date }) => {
  return <p className="clock">{format(time, "hh:mm:ss a")}</p>;
};

export const MemoFirstCase = () => {
  const time = useTime();

  //* Придумываем подходящий цвет фона, исходя из времени суток:
  const { bg, color } = getBackgroundColorFromTime(time);

  return (
    <div style={{ backgroundColor: bg, color, padding: "10px" }}>
      <Time time={time} />
      <PureFormComponent />
    </div>
  );
};
