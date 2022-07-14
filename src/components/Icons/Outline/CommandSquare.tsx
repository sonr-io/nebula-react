
import CommandSquare from "../../../assets/outline/CommandSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CommandSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CommandSquare data-testid="CommandSquareIcon" className={classes} />
  );
}
