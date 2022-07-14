
import Copy from "../../../assets/filled/Copy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CopyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Copy} data-testid="CopyIcon" className={classes} />
  );
}
