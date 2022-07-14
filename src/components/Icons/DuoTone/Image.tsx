
import Image from "../../../assets/duotone/Image.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ImageIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Image} data-testid="ImageIcon" className={classes} />
  );
}
