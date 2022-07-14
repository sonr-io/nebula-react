
import TextalignJustifyleft from "../../../assets/duotone/TextalignJustifyleft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TextalignJustifyleftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={TextalignJustifyleft} data-testid="TextalignJustifyleftIcon" className={classes} />
  );
}
