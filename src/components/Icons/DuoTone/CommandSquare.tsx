
import CommandSquare from "../../../assets/duotone/CommandSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CommandSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CommandSquare} data-testid="CommandSquareIcon" className={classes} />
  );
}
