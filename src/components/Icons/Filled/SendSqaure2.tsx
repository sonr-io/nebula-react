
import SendSqaure2 from "../../../assets/filled/SendSqaure2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SendSqaure2Icon({ className, dataTestid = "SendSqaure2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SendSqaure2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
