
import TextBlock from "../../../assets/outline/TextBlock.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TextBlockIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={TextBlock} data-testid="TextBlockIcon" className={classes} />
  );
}
