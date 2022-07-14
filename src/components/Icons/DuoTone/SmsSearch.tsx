
import SmsSearch from "../../../assets/duotone/SmsSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmsSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SmsSearch} data-testid="SmsSearchIcon" className={classes} />
  );
}
