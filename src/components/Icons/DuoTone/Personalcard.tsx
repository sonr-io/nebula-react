
import Personalcard from "../../../assets/duotone/Personalcard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PersonalcardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Personalcard data-testid="PersonalcardIcon" className={classes} />
  );
}
