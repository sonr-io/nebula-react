
import Arrow from "../../../assets/duotone/Arrow.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Arrow} data-testid="ArrowIcon" className={classes} />
  );
}
