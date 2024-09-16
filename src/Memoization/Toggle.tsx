import { ReactNode, memo } from "react";
import { useToggle } from "../hooks/useToggle";

const Button = memo(({ onClick }: { onClick: () => void }): JSX.Element => {
  return <button onClick={onClick}>Toggle Theme</button>;
});

const Toggle = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  return (
    <div style={{ backgroundColor: isDarkMode ? "#0000" : "#ffff" }}>
      <Button onClick={toggleDarkMode} />
      {children}
    </div>
  );
};

export default Toggle;
