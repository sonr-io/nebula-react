
import PenClose from "../../../assets/duotone/PenClose.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PenCloseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PenClose data-testid="PenCloseIcon" className={classes} />
  );
}
