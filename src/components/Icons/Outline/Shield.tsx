
import Shield from "../../../assets/outline/Shield.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShieldIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Shield} data-testid="ShieldIcon" className={classes} />
  );
}
