
import StarSlash from "../../../assets/filled/StarSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function StarSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <StarSlash data-testid="StarSlashIcon" className={classes} />
  );
}
