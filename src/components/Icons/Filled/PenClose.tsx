
import PenClose from "../../../assets/filled/PenClose.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PenCloseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={PenClose} data-testid="PenCloseIcon" className={classes} />
  );
}
