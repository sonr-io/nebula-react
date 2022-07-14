
import SmsEdit from "../../../assets/filled/SmsEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmsEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SmsEdit data-testid="SmsEditIcon" className={classes} />
  );
}
