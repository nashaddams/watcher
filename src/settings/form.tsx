import { HTMLAttributes } from "react";
import { styled } from "styled-components";
import { Color } from "../global.tsx";
import { Input } from "../shared/elements.tsx";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  margin-top: 16px;
`;

const Button = styled.div`
  border-radius: 6px;
  padding: 6px;
  background-color: ${Color.BgSecondary};
  border: none;
  cursor: pointer;
`;

const Select = styled.select`
  outline: none;
  border: none;
  width: 100%;
  border-radius: 6px;
  border-right: 8px solid transparent;
  padding: 12px 14px;
  color: white;
  background-color: ${Color.BgSecondary};
  font-size: 1rem;
  cursor: pointer;
  width: 210px;
  /* Light arrow color */
  color-scheme: dark;
`;

const CheckBoxInput = styled.input.attrs({ type: "checkbox" })`
  margin: 0 8px 0 0;
  cursor: pointer;
`;

const CheckBoxLabel = styled.label`
  cursor: pointer;
`;

const Svg = styled.svg`
  height: 20px;
  width: auto;
  margin: 4px 4px 0 5px;
`;

export const Form = {
  Wrapper,
  Input,
  Select,
  SaveButton: (props: HTMLAttributes<HTMLDivElement>) => (
    <Button {...props}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M18 19H19V6.82843L17.1716 5H16V9H7V5H5V19H6V12H18V19ZM4 3H18L20.7071 5.70711C20.8946 5.89464 21 6.149 21 6.41421V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM8 14V19H16V14H8Z">
        </path>
      </Svg>
    </Button>
  ),
  CopyButton: (props: HTMLAttributes<HTMLDivElement>) => (
    <Button {...props}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z" />
      </Svg>
    </Button>
  ),
  Checks: (
    { items, onChange }: {
      items: { value: string; label: string; checked: boolean }[];
      onChange: (
        { value, label, checked }: {
          value: string;
          label: string;
          checked: boolean;
        },
      ) => void;
    },
  ) =>
    items.map(({ value, checked, label }) => {
      const collectionId = Math.random().toString(36).slice(2);
      return (
        <div style={{ marginBottom: "8px" }}>
          <CheckBoxInput
            id={value}
            name={collectionId}
            value={value}
            checked={checked}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange({ value, label, checked: e.target.checked })}
          />
          <CheckBoxLabel htmlFor={value}>{label}</CheckBoxLabel>
        </div>
      );
    }),
};
