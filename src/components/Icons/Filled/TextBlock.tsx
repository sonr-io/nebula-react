
import TextBlock from "../../../assets/filled/TextBlock.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TextBlockIcon({ className, dataTestid = "TextBlockIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TextBlock data-testid={dataTestid} className={classes} {...rest} />
  );
}
