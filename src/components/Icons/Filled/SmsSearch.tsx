
import SmsSearch from "../../../assets/filled/SmsSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SmsSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SmsSearch data-testid="SmsSearchIcon" className={classes} />
  );
}
