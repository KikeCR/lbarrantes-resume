import type { ReactNode } from 'react';
import 'react-awesome-reveal';

// react-awesome-reveal's RevealProps predates React 18's @types/react, which
// stopped implicitly adding `children` to React.FC props — patch it back in
// via declaration merging rather than casting at every <Fade>/<Reveal> call site.
declare module 'react-awesome-reveal' {
	interface RevealProps {
		children?: ReactNode;
	}
}
