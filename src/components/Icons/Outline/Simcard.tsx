
import Simcard from "../../../assets/outline/Simcard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SimcardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Simcard data-testid="SimcardIcon" className={classes} />
  );
}
