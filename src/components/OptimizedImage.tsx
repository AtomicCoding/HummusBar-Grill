import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  aspectRatio?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '100vw',
  aspectRatio,
  loading = 'lazy',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik0yMCAyOEMyNCAyOCAyOCAyNCAyOCAyMEMyOCAxNiAyNCAxMiAyMCAxMkMxNiAxMiAxMiAxNiAxMiAyMEMxMiAyNCAxNiAyOCAyMCAyOFoiIGZpbGw9IiNlNWU3ZWIiLz4KPHBhdGggZD0iTTE1IDE4QzE1LjU1MjMgMTggMTYgMTcuNTUyMyAxNiAxN0MxNiAxNi40NDc3IDE1LjU1MjMgMTYgMTUgMTZDMTQuNDQ3NyAxNiAxNCAxNi40NDc3IDE0IDE3QzE0IDE3LjU1MjMgMTQuNDQ3NyAxOCAxNSAxOFoiIGZpbGw9IiNkMWQ1ZGIiLz4KPC9zdmc+'
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (loading === 'lazy' && !priority) {
      observer.observe(img);
    }

    return () => observer.disconnect();
  }, [loading, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (imgRef.current) {
      imgRef.current.classList.add('loaded');
    }
  };

  const handleError = () => {
    setHasError(true);
  };

  // Create responsive srcSet for WebP optimization
  const createSrcSet = (baseSrc: string) => {
    if (baseSrc.includes('cdn.builder.io')) {
      return [
        `${baseSrc}?format=webp&width=400 400w`,
        `${baseSrc}?format=webp&width=800 800w`,
        `${baseSrc}?format=webp&width=1200 1200w`,
        `${baseSrc}?format=webp&width=1600 1600w`
      ].join(', ');
    }
    return undefined;
  };

  const optimizedSrc = src.includes('cdn.builder.io') 
    ? `${src}?format=webp&width=${width || 800}&quality=85`
    : src;

  if (hasError) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center bg-gray-200 text-gray-500",
          className
        )}
        style={{ aspectRatio }}
      >
        <span className="text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <picture>
      {src.includes('cdn.builder.io') && (
        <>
          <source 
            srcSet={createSrcSet(src)} 
            sizes={sizes}
            type="image/webp"
          />
          <source 
            srcSet={createSrcSet(src.replace('?format=webp', ''))} 
            sizes={sizes}
            type="image/jpeg"
          />
        </>
      )}
      <img
        ref={imgRef}
        src={priority ? optimizedSrc : placeholder}
        data-src={!priority ? optimizedSrc : undefined}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        className={cn(
          'transition-opacity duration-300',
          !isLoaded && !priority && 'opacity-0',
          isLoaded && 'opacity-100',
          className
        )}
        style={{ aspectRatio }}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
      />
    </picture>
  );
};

export default OptimizedImage;
