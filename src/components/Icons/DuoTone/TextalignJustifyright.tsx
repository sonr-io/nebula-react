
import TextalignJustifyright from "../../../assets/duotone/TextalignJustifyright.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TextalignJustifyrightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TextalignJustifyright data-testid="TextalignJustifyrightIcon" className={classes} />
  );
}
