
import TextBold from "../../../assets/outline/TextBold.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TextBoldIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TextBold data-testid="TextBoldIcon" className={classes} />
  );
}
