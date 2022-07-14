
import Image from "../../../assets/outline/Image.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ImageIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Image data-testid="ImageIcon" className={classes} />
  );
}
