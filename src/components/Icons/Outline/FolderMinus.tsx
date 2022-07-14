
import FolderMinus from "../../../assets/outline/FolderMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderMinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={FolderMinus} data-testid="FolderMinusIcon" className={classes} />
  );
}
