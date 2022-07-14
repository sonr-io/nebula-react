
import Headphone from "../../../assets/filled/Headphone.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeadphoneIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Headphone data-testid="HeadphoneIcon" className={classes} />
  );
}
