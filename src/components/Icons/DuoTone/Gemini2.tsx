
import Gemini2 from "../../../assets/duotone/Gemini2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Gemini2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Gemini2} data-testid="Gemini2Icon" className={classes} />
  );
}
