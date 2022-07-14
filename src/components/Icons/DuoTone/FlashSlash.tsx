
import FlashSlash from "../../../assets/duotone/FlashSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FlashSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={FlashSlash} data-testid="FlashSlashIcon" className={classes} />
  );
}
