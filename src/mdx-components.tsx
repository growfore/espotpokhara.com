import type { MDXComponents } from "mdx/types";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, ...props }) => {
      const id = slugify(String(children ?? ""));
      return <h2 id={id} {...props}>{children}</h2>;
    },
    h3: ({ children, ...props }) => {
      const id = slugify(String(children ?? ""));
      return <h3 id={id} {...props}>{children}</h3>;
    },
    h4: ({ children, ...props }) => {
      const id = slugify(String(children ?? ""));
      return <h4 id={id} {...props}>{children}</h4>;
    },
    a: ({ href, children, ...props }) => {
      const isExternal = href?.startsWith("http") || href?.startsWith("//");
      if (isExternal) {
        return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
      }
      return <a href={href} {...props}>{children}</a>;
    },
    ...components,
  };
}
