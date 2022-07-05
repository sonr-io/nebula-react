
import Dent from "../../../assets/outline/Dent.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DentIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Dent data-testid="DentIcon" className={classes} />
  );
}
