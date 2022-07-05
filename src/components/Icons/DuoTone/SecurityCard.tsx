
import SecurityCard from "../../../assets/duotone/SecurityCard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SecurityCardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SecurityCard data-testid="SecurityCardIcon" className={classes} />
  );
}
