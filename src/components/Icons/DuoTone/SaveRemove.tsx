
import SaveRemove from "../../../assets/duotone/SaveRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SaveRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SaveRemove data-testid="SaveRemoveIcon" className={classes} />
  );
}
