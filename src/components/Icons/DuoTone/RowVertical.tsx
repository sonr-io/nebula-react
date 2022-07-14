
import RowVertical from "../../../assets/duotone/RowVertical.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RowVerticalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={RowVertical} data-testid="RowVerticalIcon" className={classes} />
  );
}
