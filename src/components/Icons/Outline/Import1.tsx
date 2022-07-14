
import Import1 from "../../../assets/outline/Import1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Import1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Import1} data-testid="Import1Icon" className={classes} />
  );
}
