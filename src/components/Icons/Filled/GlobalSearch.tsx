
import GlobalSearch from "../../../assets/filled/GlobalSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GlobalSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GlobalSearch data-testid="GlobalSearchIcon" className={classes} />
  );
}
