
import EyeSlash from "../../../assets/filled/EyeSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function EyeSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <EyeSlash data-testid="EyeSlashIcon" className={classes} />
  );
}
