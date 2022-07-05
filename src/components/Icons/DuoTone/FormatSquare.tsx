
import FormatSquare from "../../../assets/duotone/FormatSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FormatSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FormatSquare data-testid="FormatSquareIcon" className={classes} />
  );
}
