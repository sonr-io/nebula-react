
import Wind from "../../../assets/duotone/Wind.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WindIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Wind} data-testid="WindIcon" className={classes} />
  );
}
