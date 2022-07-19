
import Additem from "../../../assets/filled/Additem.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AdditemIcon({ className, dataTestid = "AdditemIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Additem data-testid={dataTestid} className={classes} {...rest} />
  );
}
