
import AttachSquare from "../../../assets/duotone/AttachSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AttachSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={AttachSquare} data-testid="AttachSquareIcon" className={classes} />
  );
}
