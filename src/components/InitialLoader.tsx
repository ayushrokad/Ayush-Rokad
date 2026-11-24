'use client';

import { useEffect, useState } from 'react';

const MIN_DISPLAY_MS = 620;
const MAX_WAIT_MS = 1_250;
const EXIT_MS = 320;

const keyRows = [
  { x: 69, y: 55, count: 10 },
  { x: 60, y: 65, count: 10 },
  { x: 51, y: 75, count: 10 },
  { x: 43, y: 85, count: 9 },
];

export const InitialLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) {
      setIsVisible(false);
      return;
    }

    const startedAt = performance.now();
    let hasStartedExit = false;
    let exitTimer: number | undefined;
    let removeTimer: number | undefined;
    let maxWaitTimer: number | undefined;

    const finish = () => {
      if (hasStartedExit) return;
      hasStartedExit = true;

      const remainingMinimumTime = Math.max(
        0,
        MIN_DISPLAY_MS - (performance.now() - startedAt)
      );

      exitTimer = window.setTimeout(() => {
        setIsLeaving(true);
        removeTimer = window.setTimeout(() => {
          setIsVisible(false);
        }, EXIT_MS);
      }, remainingMinimumTime);
    };

    const finishAfterPaint = () => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(finish);
      });
    };

    const handlePageReady = () => {
      // The site uses next/font, so wait for its local font faces without
      // introducing another network request.
      document.fonts.ready
        .then(finishAfterPaint)
        .catch(finishAfterPaint);
    };

    if (document.readyState === 'complete') {
      handlePageReady();
    } else {
      window.addEventListener('load', handlePageReady, { once: true });
    }

    // Never keep the visitor behind the intro indefinitely.
    maxWaitTimer = window.setTimeout(finish, MAX_WAIT_MS);

    return () => {
      window.removeEventListener('load', handlePageReady);
      if (exitTimer !== undefined) window.clearTimeout(exitTimer);
      if (removeTimer !== undefined) window.clearTimeout(removeTimer);
      if (maxWaitTimer !== undefined) window.clearTimeout(maxWaitTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`initial-loader fixed inset-0 z-[100] grid place-items-center bg-[#0B0B0D] transition-opacity duration-[320ms] ease-out ${
        isLeaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      data-state={isLeaving ? 'leaving' : 'visible'}
      role="status"
      aria-live="polite"
      aria-label="Loading Ayush Rokad's portfolio"
    >
      <div className="initial-loader__content flex flex-col items-center">
        <svg
          className="initial-loader__keyboard w-[230px] sm:w-[270px] md:w-[310px]"
          viewBox="0 0 320 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g
            stroke="#85818F"
            strokeWidth="1.15"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M24 83L117 31.5C121.3 29.1 126.4 29.1 130.8 31.4L294 109.3C301 112.6 301.1 117.3 294.2 120.7L174.3 177.2C169.5 179.5 163.9 179.4 159.2 177L24.7 96.7C17.7 92.5 17.5 86.7 24 83Z"
              opacity=".75"
            />
            <path
              d="M31 81L119.5 35.4C123.2 33.5 127.4 33.5 131.2 35.3L286.1 109.1L168.7 164.7L31 88.4V81Z"
              opacity=".5"
            />
            <path d="M31 88.4L31 95.1L160 171.2C165.1 174.2 170.2 174 175.1 171.7L293.7 115.4" opacity=".55"/>
            <path d="M168.7 164.7L168.7 172.8" opacity=".4"/>
          </g>

          {keyRows.map((row, rowIndex) =>
            Array.from({ length: row.count }, (_, keyIndex) => {
              const x = row.x + keyIndex * 13.4;
              const y = row.y + keyIndex * 5.7;
              const isAccent = rowIndex === 1 && keyIndex === 4;

              return (
                <g
                  key={`key-${rowIndex}-${keyIndex}`}
                  transform={`translate(${x} ${y})`}
                  stroke={isAccent ? '#AFA4FF' : '#85818F'}
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={isAccent ? '.75' : '.62'}
                >
                  <path d="M0 0L7.5-4L16 0L8.5 4.2Z" fill="#17171C" />
                  <path d="M0 0V5L8.5 9.2V4.2M8.5 4.2V9.2L16 5V0" fill="#111115" />
                </g>
              );
            })
          )}

          {/* Space bar and modifier keys */}
          <g
            stroke="#85818F"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity=".68"
          >
            <path d="M67 110L77 105L121 126L111 131Z" fill="#17171C"/>
            <path d="M67 110V116L111 138V131M111 131V138L121 133V126" fill="#111115"/>
            <path d="M126 105L135 100L151 108L142 113Z" fill="#17171C"/>
            <path d="M126 105V111L142 119V113M142 113V119L151 114V108" fill="#111115"/>
            <path d="M151 116L160 111L176 119L167 124Z" fill="#17171C"/>
            <path d="M151 116V122L167 130V124M167 124V130L176 125V119" fill="#111115"/>
            <path d="M179 129L188 124L204 132L195 137Z" fill="#17171C"/>
            <path d="M179 129V135L195 143V137M195 137V143L204 138V132" fill="#111115"/>
          </g>

          {/* Small lavender detail, kept deliberately restrained */}
          <path d="M120 73L127.5 69L136 73.2L128.5 77.4Z" fill="#AFA4FF" fillOpacity=".12" stroke="#AFA4FF" strokeWidth=".85" opacity=".8"/>
        </svg>

        <div className="initial-loader__status mt-14 w-[150px]">
          <div className="h-px w-full overflow-hidden bg-white/15">
            <div className="initial-loader__progress h-full w-full origin-left bg-[#F1F0EC]" />
          </div>
          <div className="mt-3 flex items-center justify-between font-mono text-[11px] tracking-wide text-[#929397]">
            <span>Loading</span>
            <span aria-hidden="true">099</span>
          </div>
        </div>
      </div>
      <span className="sr-only">Loading portfolio</span>
    </div>
  );
};
