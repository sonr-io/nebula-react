
import AlignBottom from "../../../assets/filled/AlignBottom.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AlignBottomIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <AlignBottom data-testid="AlignBottomIcon" className={classes} />
  );
}
