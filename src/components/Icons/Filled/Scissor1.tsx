
import Scissor1 from "../../../assets/filled/Scissor1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Scissor1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Scissor1 data-testid="Scissor1Icon" className={classes} />
  );
}
