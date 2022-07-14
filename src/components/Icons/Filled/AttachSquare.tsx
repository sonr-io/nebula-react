
import AttachSquare from "../../../assets/filled/AttachSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AttachSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <AttachSquare data-testid="AttachSquareIcon" className={classes} />
  );
}
