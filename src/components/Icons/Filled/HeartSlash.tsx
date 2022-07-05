
import HeartSlash from "../../../assets/filled/HeartSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HeartSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HeartSlash data-testid="HeartSlashIcon" className={classes} />
  );
}
