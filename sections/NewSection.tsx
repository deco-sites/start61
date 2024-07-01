import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   * @description The main title of the banner
   */
  title?: string;
  /**
   * @format textarea
   * @description The description text of the banner
   */
  description?: string;
  /**
   * @description The image to display in the banner
   */
  image?: ImageWidget;
  /**
   * @format color-input
   * @description The background color of the banner
   */
  backgroundColor?: string;
  /**
   * @format rich-text
   * @description The text for the call to action button
   */
  buttonText?: string;
  /**
   * @format color-input
   * @description The background color of the call to action button
   */
  buttonBackgroundColor?: string;
  /**
   * @format color-input
   * @description The text color of the call to action button
   */
  buttonTextColor?: string;
}

export default function Banner({
  title = "Discover Our Amazing Product",
  description = "Experience the incredible features and benefits of our product. It will transform your life!",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  backgroundColor = "#f0fdf4",
  buttonText = "Learn More",
  buttonBackgroundColor = "#34d399",
  buttonTextColor = "#ffffff"
}: Props) {
  return (
    <div class={`bg-[${backgroundColor}] text-green-900 py-12 px-6 rounded-xl font-display`}>
      <h2 class="text-4xl md:text-5xl font-bold mb-4 text-center">{title}</h2>
      <img
        src={image}
        alt="Banner"
        class="w-full h-64 md:h-96 object-cover object-center rounded-xl shadow-lg mb-6"
      />
      <p class="text-lg md:text-xl text-center mb-6">{description}</p>
      <div class="flex justify-center">
        <button class={`btn bg-[${buttonBackgroundColor}] text-[${buttonTextColor}]`}>
          {buttonText}
        </button>
      </div>
      <div class="mt-8">
        <div class="radial-progress text-green-900" style={`--value:${70}; --size:12rem; --thickness:2px;`}>
          <span class="text-6xl font-bold">
            70</span>
        </div>
        <p class="text-center mt-2">Progress</p>
      </div>
    </div>
  );
}