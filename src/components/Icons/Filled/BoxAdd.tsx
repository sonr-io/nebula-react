
import BoxAdd from "../../../assets/filled/BoxAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BoxAddIcon({ className, dataTestid = "BoxAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BoxAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
