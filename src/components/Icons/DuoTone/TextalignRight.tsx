
import TextalignRight from "../../../assets/duotone/TextalignRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TextalignRightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={TextalignRight} data-testid="TextalignRightIcon" className={classes} />
  );
}
