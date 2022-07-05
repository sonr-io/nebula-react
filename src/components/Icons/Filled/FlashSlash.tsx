
import FlashSlash from "../../../assets/filled/FlashSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FlashSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FlashSlash data-testid="FlashSlashIcon" className={classes} />
  );
}
