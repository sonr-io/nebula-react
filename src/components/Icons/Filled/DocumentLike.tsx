
import DocumentLike from "../../../assets/filled/DocumentLike.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentLikeIcon({ className, dataTestid = "DocumentLikeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DocumentLike data-testid={dataTestid} className={classes} {...rest} />
  );
}
