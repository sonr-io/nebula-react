
import AlignRight from "../../../assets/filled/AlignRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AlignRightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <AlignRight data-testid="AlignRightIcon" className={classes} />
  );
}
