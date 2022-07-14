
import Hierarchy3 from "../../../assets/duotone/Hierarchy3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Hierarchy3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Hierarchy3} data-testid="Hierarchy3Icon" className={classes} />
  );
}
