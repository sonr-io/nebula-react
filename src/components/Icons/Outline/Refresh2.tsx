
import Refresh2 from "../../../assets/outline/Refresh2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Refresh2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Refresh2} data-testid="Refresh2Icon" className={classes} />
  );
}
