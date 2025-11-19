import Image from 'next/image';
import Link from 'next/link';

/**
 * Logo component that displays the X Career logo
 * 
 * @param className - Optional CSS classes to apply to the logo
 * @param href - Link destination (defaults to "/")
 * @param showLink - Whether to wrap the logo in a Link component (defaults to true)
 * 
 * @example
 * // Basic usage with link
 * <Logo />
 * 
 * // Logo without link
 * <Logo showLink={false} />
 * 
 * // Custom styling
 * <Logo className="h-10 w-auto" />
 * 
 * // Custom link destination
 * <Logo href="/dashboard" />
 */
interface LogoProps {
  className?: string;
  href?: string;
  showLink?: boolean;
}

export default function Logo({ 
  className = "h-10 w-auto sm:h-12", 
  href = "/",
  showLink = true 
}: LogoProps) {
  const logoElement = (
    <Image
      src="/images/x_careelogo.png"
      alt="X Career Logo"
      width={300}
      height={300}
      className={className}
      priority
      unoptimized={false}
    />
  );

  if (showLink) {
    return (
      <Link href={href} className="flex items-center">
        {logoElement}
      </Link>
    );
  }

  return logoElement;
} 