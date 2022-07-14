
import Lamp1 from "../../../assets/duotone/Lamp1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Lamp1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Lamp1} data-testid="Lamp1Icon" className={classes} />
  );
}
