
import BulletList from "../../../assets/duotone/BulletList.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BulletListIcon({ className, dataTestid = "BulletListIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BulletList data-testid={dataTestid} className={classes} {...rest} />
  );
}
