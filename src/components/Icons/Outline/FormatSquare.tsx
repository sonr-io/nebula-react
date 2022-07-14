
import FormatSquare from "../../../assets/outline/FormatSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FormatSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FormatSquare data-testid="FormatSquareIcon" className={classes} />
  );
}
