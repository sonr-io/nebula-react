
import Devices1 from "../../../assets/duotone/Devices1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Devices1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Devices1} data-testid="Devices1Icon" className={classes} />
  );
}
