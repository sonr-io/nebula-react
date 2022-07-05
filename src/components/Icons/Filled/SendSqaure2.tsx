
import SendSqaure2 from "../../../assets/filled/SendSqaure2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SendSqaure2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SendSqaure2 data-testid="SendSqaure2Icon" className={classes} />
  );
}
