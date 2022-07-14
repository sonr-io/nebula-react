
import FlashCircle from "../../../assets/filled/FlashCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FlashCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FlashCircle data-testid="FlashCircleIcon" className={classes} />
  );
}