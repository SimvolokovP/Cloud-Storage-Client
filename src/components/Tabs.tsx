import { FC } from "react";

interface TabElement {
  label: string;
  value: string;
}

interface TabsProps {
  onChange: (v: string) => void;
  values: TabElement[];
}

const Tabs: FC<TabsProps> = ({ onChange, values }) => {
  return (
    <div style={{display: "flex", gap: "12px"}}>
      {values.map((el) => (
        <button key={el.value} onClick={() => onChange(el.value)}>{el.label}</button>
      ))}
    </div>
  );
};

export default Tabs;
