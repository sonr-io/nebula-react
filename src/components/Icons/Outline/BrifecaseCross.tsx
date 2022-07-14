
import BrifecaseCross from "../../../assets/outline/BrifecaseCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BrifecaseCrossIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BrifecaseCross data-testid="BrifecaseCrossIcon" className={classes} />
  );
}
