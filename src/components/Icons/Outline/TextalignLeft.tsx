
import TextalignLeft from "../../../assets/outline/TextalignLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TextalignLeftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TextalignLeft data-testid="TextalignLeftIcon" className={classes} />
  );
}
