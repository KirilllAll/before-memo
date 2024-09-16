import React from "react";

const MemoExample: React.FC<{ name: string }> = ({ name }) => {
  return <div>{name}</div>;
};

const areEqual = (prevProps: { name: string }, nextProps: { name: string }) => {
  return prevProps.name === nextProps.name;
};

export const MemoizedComponent = React.memo(MemoExample, areEqual);
