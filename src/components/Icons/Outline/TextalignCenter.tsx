
import TextalignCenter from "../../../assets/outline/TextalignCenter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TextalignCenterIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TextalignCenter data-testid="TextalignCenterIcon" className={classes} />
  );
}
