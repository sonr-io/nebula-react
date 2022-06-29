import React from 'react';
import { IconProps } from '../../types';
const cx = require('classnames');

interface IconComponentProps extends IconProps {
  name: string;
  type?: 'filled' | 'outline' | 'duotone';
  className?: string;
}

export const Icon: React.FC<IconComponentProps> = ({ name, type = 'filled', className }): JSX.Element | null => {
  const classes = cx('w-4 h-4 mr-2', className);

  const ImportedIconRef = React.useRef<
    React.FC<React.SVGProps<SVGSVGElement>>
  >();
  const [loading, setLoading] = React.useState(false);

  React.useEffect((): void => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (await import(`../../assets/${type}/${name}.svg`)).ReactComponent;
      } catch (err) {
        // Your own error handling logic, throwing error for the sake of
        // simplicity
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [type, name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    console.log({ ImportedIcon })
    return <ImportedIcon data-testid="icon-svg" className={classes} />;
  }

  return null;
};
