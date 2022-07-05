
import MinusCirlce from "../../../assets/filled/MinusCirlce.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MinusCirlceIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MinusCirlce data-testid="MinusCirlceIcon" className={classes} />
  );
}
