
import Key from "../../../assets/duotone/Key.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function KeyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Key data-testid="KeyIcon" className={classes} />
  );
}
