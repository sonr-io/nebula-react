
import TextalignLeft from "../../../assets/duotone/TextalignLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TextalignLeftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TextalignLeft data-testid="TextalignLeftIcon" className={classes} />
  );
}
