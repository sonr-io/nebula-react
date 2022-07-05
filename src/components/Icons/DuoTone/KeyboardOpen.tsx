
import KeyboardOpen from "../../../assets/duotone/KeyboardOpen.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function KeyboardOpenIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <KeyboardOpen data-testid="KeyboardOpenIcon" className={classes} />
  );
}
