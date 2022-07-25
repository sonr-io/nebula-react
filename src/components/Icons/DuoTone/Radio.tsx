
import Radio from "../../../assets/duotone/Radio.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RadioIcon({ className, dataTestid = "RadioIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Radio data-testid={dataTestid} className={classes} {...rest} />
  );
}
