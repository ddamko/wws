import { Carousel, initTE } from "tw-elements";
import { component$ } from "@builder.io/qwik";

initTE({ Carousel });

export default component$(() => {
	return (
		<div id="carouselExampleSlidesOnly" class="relative" data-te-carousel-init data-te-carousel-slide data-te-interval="3000">
			<div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
				<div class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-item data-te-carousel-active>
					<img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="block w-full" alt="Wild Landscape" />
				</div>
				<div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-item>
					<img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="block w-full" alt="Camera" />
				</div>
				<div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-te-carousel-item>
					<img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="block w-full" alt="Exotic Fruits" />
				</div>
			</div>
		</div>
	);
});
