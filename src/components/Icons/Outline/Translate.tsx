
import Translate from "../../../assets/outline/Translate.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TranslateIcon({ className, dataTestid = "TranslateIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Translate data-testid={dataTestid} className={classes} {...rest} />
  );
}
