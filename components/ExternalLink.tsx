import type { AnchorHTMLAttributes } from "react";

/**
 * Use for all external links: adds rel="noopener noreferrer" for security.
 */
export function ExternalLink({
  href,
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal =
    typeof href === "string" &&
    (href.startsWith("http://") || href.startsWith("https://"));
  return (
    <a
      href={href}
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
