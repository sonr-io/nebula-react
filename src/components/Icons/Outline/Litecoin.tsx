
import Litecoin from "../../../assets/outline/Litecoin.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LitecoinIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Litecoin data-testid="LitecoinIcon" className={classes} />
  );
}
