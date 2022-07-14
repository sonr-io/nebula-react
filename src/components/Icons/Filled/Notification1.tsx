
import Notification1 from "../../../assets/filled/Notification1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Notification1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Notification1 data-testid="Notification1Icon" className={classes} />
  );
}
