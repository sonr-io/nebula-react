
import NumberList from "../../../assets/duotone/NumberList.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NumberListIcon({ className, dataTestid = "NumberListIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <NumberList data-testid={dataTestid} className={classes} {...rest} />
  );
}
