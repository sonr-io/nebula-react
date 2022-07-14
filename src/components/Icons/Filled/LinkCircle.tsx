
import LinkCircle from "../../../assets/filled/LinkCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LinkCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LinkCircle data-testid="LinkCircleIcon" className={classes} />
  );
}
