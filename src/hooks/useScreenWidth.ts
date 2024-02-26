import { useState, useEffect } from 'react';

// https://stackoverflow.com/q/68629538/438273
export default function useScreenWidth(): number {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);

  return screenWidth;
}

// export default function handleWidthChange(width: number) {
//   console.log({ width });
//   return width;
// }

// let prevWidth = 0;

// const observer = new ResizeObserver(entries => {
//   for (const entry of entries) {
//     const width = entry.borderBoxSize?.[0]?.inlineSize;
//     if (typeof width === 'number' && width !== prevWidth) {
//       prevWidth = width;
//       handleWidthChange(width);
//     }
//   }
// });

// observer.observe(document.body, { box: 'border-box' });
