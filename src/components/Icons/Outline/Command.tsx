
import Command from "../../../assets/outline/Command.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CommandIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Command} data-testid="CommandIcon" className={classes} />
  );
}
