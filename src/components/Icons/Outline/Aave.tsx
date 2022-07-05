
import Aave from "../../../assets/outline/Aave.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AaveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Aave data-testid="AaveIcon" className={classes} />
  );
}
