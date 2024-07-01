import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   * @description The main title of the banner
   */
  title?: string;
  /**
   * @format textarea
   * @description The description text below the image
   */
  description?: string;
  /**
   * @description The image to display in the banner
   */
  image?: ImageWidget;
  /**
   * @format color-input
   * @description The background color for the banner
   */
  backgroundColor?: string;
}

export default function Banner({
  title = "Discover Our Amazing Product",
  description = "Experience the incredible features and benefits of our product. It will transform your life!",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  backgroundColor = "#F7FEE7"
}: Props) {
  return (
    <div class={`bg-[${backgroundColor}] py-12 px-6 rounded-xl font-display`}>
      <h2 class="text-4xl md:text-5xl font-bold mb-4 text-center">{title}</h2>
      <img
        src={image}
        alt="Banner"
        class="w-full h-64 md:h-96 object-cover object-center rounded-xl shadow-lg mb-6"
      />
      <p class="text-lg md:text-xl text-center">{description}</p>
    </div>
  );
}