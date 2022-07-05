
import BrifecaseCross from "../../../assets/filled/BrifecaseCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BrifecaseCrossIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BrifecaseCross data-testid="BrifecaseCrossIcon" className={classes} />
  );
}
