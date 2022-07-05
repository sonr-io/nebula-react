
import Android from "../../../assets/duotone/Android.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AndroidIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Android data-testid="AndroidIcon" className={classes} />
  );
}
