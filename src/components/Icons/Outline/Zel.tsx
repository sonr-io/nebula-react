
import Zel from "../../../assets/outline/Zel.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ZelIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Zel} data-testid="ZelIcon" className={classes} />
  );
}
