
import TextBlock from "../../../assets/duotone/TextBlock.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TextBlockIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TextBlock data-testid="TextBlockIcon" className={classes} />
  );
}
