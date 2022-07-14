
import Scissor1 from "../../../assets/duotone/Scissor1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Scissor1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Scissor1} data-testid="Scissor1Icon" className={classes} />
  );
}
