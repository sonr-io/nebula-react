
import Check from "../../../assets/filled/Check.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CheckIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Check data-testid="CheckIcon" className={classes} />
  );
}
