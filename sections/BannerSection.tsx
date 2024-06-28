import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  image?: ImageWidget;
  /** @format rich-text */
  title?: string;
  /** @format textarea */
  description?: string;
}

export default function Banner({ image, title, description }: Props) {
  return (
    <div className="text-center">
      {title && <h2 className="text-4xl font-rounded text-green-600 mb-4">{title}</h2>}
      {image && (
        <Image
          src={image}
          alt={title || "Banner Image"}
          width={1200}
          height={400}
          className="mx-auto rounded-lg"
        />
      )}
      {description && <p className="mt-4 text-lg text-green-700 font-rounded">{description}</p>}
    </div>
  );
}