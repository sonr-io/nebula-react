
import Forward from "../../../assets/filled/Forward.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ForwardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Forward data-testid="ForwardIcon" className={classes} />
  );
}
