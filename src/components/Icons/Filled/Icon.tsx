
import Icon from "../../../assets/filled/Icon.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function IconIcon({ className, dataTestid = "IconIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Icon data-testid={dataTestid} className={classes} {...rest} />
  );
}
