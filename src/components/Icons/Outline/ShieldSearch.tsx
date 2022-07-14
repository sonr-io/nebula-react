
import ShieldSearch from "../../../assets/outline/ShieldSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShieldSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ShieldSearch data-testid="ShieldSearchIcon" className={classes} />
  );
}
