import { ReactNode, createContext, useMemo } from "react";
type User = {
  id: string;
  name: string;
  status: "user" | "admin";
};

const Initial = { id: "1", name: "userName", status: "user" };
const MemoContext = createContext({
  user: Initial,
});

const MemoProvider = ({
  user,
  children,
}: {
  user: User;
  children: ReactNode;
}) => {
  const memoizedValue = useMemo(() => {
    return {
      user,
    };
  }, [user]);

  return (
    <MemoContext.Provider value={memoizedValue}>
      {children}
    </MemoContext.Provider>
  );
};

export { MemoProvider };
