
import TextalignJustifyleft from "../../../assets/outline/TextalignJustifyleft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TextalignJustifyleftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TextalignJustifyleft data-testid="TextalignJustifyleftIcon" className={classes} />
  );
}
