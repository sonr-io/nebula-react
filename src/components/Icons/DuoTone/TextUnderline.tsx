
import TextUnderline from "../../../assets/duotone/TextUnderline.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TextUnderlineIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TextUnderline data-testid="TextUnderlineIcon" className={classes} />
  );
}
