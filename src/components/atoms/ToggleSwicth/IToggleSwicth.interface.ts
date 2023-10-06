import { SetStateAction } from "react";

interface IToggleSwitch {
  active: boolean;
  setActive: (value: boolean) => void;
}

export default IToggleSwitch;
