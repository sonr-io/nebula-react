
import AlignLeft from "../../../assets/filled/AlignLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AlignLeftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <AlignLeft data-testid="AlignLeftIcon" className={classes} />
  );
}
