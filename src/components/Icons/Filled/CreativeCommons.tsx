
import CreativeCommons from "../../../assets/filled/CreativeCommons.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CreativeCommonsIcon({ className, dataTestid = "CreativeCommonsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CreativeCommons data-testid={dataTestid} className={classes} {...rest} />
  );
}
