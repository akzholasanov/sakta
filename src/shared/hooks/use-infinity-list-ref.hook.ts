import { useCallback, useRef } from 'react';

export const useInfiniteListRef = (
  hasMore?: boolean,
  fetchMore?: () => void,
  isLoading?: boolean,
  init: { root?: HTMLElement | null; rootMargin?: string } = {},
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { root, rootMargin = '0px' } = init;

  return useCallback(
    (node: HTMLElement | null) => {
      if (isLoading || !hasMore) return;

      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            fetchMore?.();
          }
        },
        { root, rootMargin },
      );

      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasMore, root, rootMargin, fetchMore],
  );
};
