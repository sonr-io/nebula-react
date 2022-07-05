
import Smallcaps from "../../../assets/filled/Smallcaps.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SmallcapsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Smallcaps data-testid="SmallcapsIcon" className={classes} />
  );
}
