
import Notification2 from "../../../assets/filled/Notification2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Notification2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Notification2 data-testid="Notification2Icon" className={classes} />
  );
}
