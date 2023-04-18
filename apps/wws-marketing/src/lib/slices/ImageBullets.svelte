<script>
  import * as prismicH from '@prismicio/helpers';

  export let slice;

  const { src, srcset } = prismicH.asImageWidthSrcSet(slice.primary.image);
</script>

<div class="layout box">
  <img {src} {srcset} alt={slice.primary.image.alt} />
  <ul>
    <li>{prismicH.asHTML(slice.items[0].bullet, null, { paragraph: ({ children }) => children })}</li>
  </ul>
</div>