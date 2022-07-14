
import StarSlash from "../../../assets/duotone/StarSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StarSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={StarSlash} data-testid="StarSlashIcon" className={classes} />
  );
}
