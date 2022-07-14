
import TextalignJustifyright from "../../../assets/outline/TextalignJustifyright.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TextalignJustifyrightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TextalignJustifyright data-testid="TextalignJustifyrightIcon" className={classes} />
  );
}
