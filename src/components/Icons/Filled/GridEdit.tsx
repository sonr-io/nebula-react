
import GridEdit from "../../../assets/filled/GridEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GridEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={GridEdit} data-testid="GridEditIcon" className={classes} />
  );
}
