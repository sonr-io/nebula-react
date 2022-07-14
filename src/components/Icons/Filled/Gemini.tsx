
import Gemini from "../../../assets/filled/Gemini.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GeminiIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Gemini} data-testid="GeminiIcon" className={classes} />
  );
}
