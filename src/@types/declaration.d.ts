import type { FunctionComponent, SVGProps } from 'react';

declare module '*.svg' {
  // eslint-disable-next-line init-declarations
  const content: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.svg?url' {
  // eslint-disable-next-line init-declarations
  const content: string;
  export default content;
}
