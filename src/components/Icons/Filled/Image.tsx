
import Image from "../../../assets/filled/Image.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ImageIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Image data-testid="ImageIcon" className={classes} />
  );
}
