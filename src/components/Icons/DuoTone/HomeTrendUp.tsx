
import HomeTrendUp from "../../../assets/duotone/HomeTrendUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HomeTrendUpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HomeTrendUp data-testid="HomeTrendUpIcon" className={classes} />
  );
}
