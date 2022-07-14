
import Arrow from "../../../assets/filled/Arrow.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Arrow data-testid="ArrowIcon" className={classes} />
  );
}
