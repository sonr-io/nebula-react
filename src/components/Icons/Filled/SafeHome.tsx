
import SafeHome from "../../../assets/filled/SafeHome.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SafeHomeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SafeHome data-testid="SafeHomeIcon" className={classes} />
  );
}
