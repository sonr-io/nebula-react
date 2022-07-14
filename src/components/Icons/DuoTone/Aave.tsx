
import aave from "../../../assets/duotone/Aave.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AaveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={aave} data-testid="AaveIcon" className={classes} />
  );
}
