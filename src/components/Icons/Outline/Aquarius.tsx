
import Aquarius from "../../../assets/outline/Aquarius.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AquariusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Aquarius data-testid="AquariusIcon" className={classes} />
  );
}
