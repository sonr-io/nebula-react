
import HeartSlash from "../../../assets/duotone/HeartSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HeartSlash data-testid="HeartSlashIcon" className={classes} />
  );
}