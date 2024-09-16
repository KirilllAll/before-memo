import { FixSecondExample } from "./FixSecondExample";
import { OptimalFirstCase } from "./OptimalFirstCase";

import Toggle from "./Toggle";

export const MemoizationExamples = () => {
  return (
    <Toggle>
      <OptimalFirstCase />
      <FixSecondExample />
    </Toggle>
  );
};
