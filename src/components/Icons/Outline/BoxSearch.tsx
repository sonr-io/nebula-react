
import BoxSearch from "../../../assets/outline/BoxSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BoxSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BoxSearch data-testid="BoxSearchIcon" className={classes} />
  );
}
