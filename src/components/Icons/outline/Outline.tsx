import React from 'react';
import { IconProps } from '../../../types';
const cx = require('classnames');

interface OutLineProps extends IconProps {
  name: string;
  className?: string;
}

export const Outline: React.FC<OutLineProps> = ({ name, className }): JSX.Element | null => {
  const classes = cx('w-4 h-4 mr-2', className);

  const ImportedIconRef = React.useRef<
    React.FC<React.SVGProps<SVGSVGElement>>
  >();
  const [loading, setLoading] = React.useState(false);

  React.useEffect((): void => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (await import(`../../../assets/outline/${name}.svg`)).ReactComponent;
      } catch (err) {
        // Your own error handling logic, throwing error for the sake of
        // simplicity
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    console.log({ ImportedIcon })
    return <ImportedIcon data-testid="icon-svg" className={classes} />;
  }

  return null;
};
