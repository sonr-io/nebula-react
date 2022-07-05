
import Moneys from "../../../assets/duotone/Moneys.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MoneysIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Moneys data-testid="MoneysIcon" className={classes} />
  );
}
