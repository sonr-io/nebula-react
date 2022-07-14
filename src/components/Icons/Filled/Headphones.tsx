
import Headphones from "../../../assets/filled/Headphones.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeadphonesIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Headphones} data-testid="HeadphonesIcon" className={classes} />
  );
}
