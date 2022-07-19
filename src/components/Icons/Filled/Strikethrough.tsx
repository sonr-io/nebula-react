
import Strikethrough from "../../../assets/filled/Strikethrough.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StrikethroughIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Strikethrough data-testid="StrikethroughIcon" className={classes} />
  );
}
