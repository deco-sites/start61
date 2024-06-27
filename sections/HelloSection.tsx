import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  /**
   * @title Product Image
   * @description The image of the product
   */
  productImage?: ImageWidget;

  /**
   * @title Product Title
   * @description The title of the product
   * @format rich-text
   */
  title?: string;

  /**
   * @title Product Description
   * @description A brief description of the product
   * @format textarea
   */
  description?: string;

  /**
   * @title CTA Text
   * @description Text for the call-to-action button
   */
  ctaText?: string;

  /**
   * @title CTA Link
   * @description URL for the call-to-action button
   */
  ctaLink?: string;

  /**
   * @title Background Color
   * @description Background color of the card
   * @format color-input
   */
  backgroundColor?: string;

  /**
   * @title Show Second Card
   * @description Toggle to show or hide the second card
   */
  showSecondCard?: boolean;
}

export default function ProductCard({
  productImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  title = "Shoes!",
  description = "If a dog chews shoes whose shoes does he choose?",
  ctaText = "Buy Now",
  ctaLink = "#",
  backgroundColor = "#bef264",
  showSecondCard = false,
}: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      <div className="card w-96 shadow-xl shadow-bottom">
        <figure className="px-10 pt-10" style={{ backgroundColor }}>
          <Image
            src={productImage}
            alt="Product"
            width={300}
            height={200}
            class="rounded-xl object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <a href={ctaLink} className="btn btn-primary">{ctaText}</a>
          </div>
        </div>
      </div>
      {showSecondCard && (
        <div className="card w-96 shadow-xl shadow-bottom">
          <figure className="px-10 pt-10" style={{ backgroundColor }}>
            <Image
              src={productImage}
              alt="Product"
              width={300}
              height={200}
              class="rounded-xl object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions">
              <a href={ctaLink} className="btn btn-primary">{ctaText}</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}