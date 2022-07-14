
import Heart from "../../../assets/filled/Heart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Heart data-testid="HeartIcon" className={classes} />
  );
}
