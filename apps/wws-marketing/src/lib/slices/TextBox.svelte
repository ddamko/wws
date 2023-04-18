<script>
  import * as prismicH from '@prismicio/helpers';

  export let slice;
</script>

<article>
  <div class="emoji">{slice.primary.emoji}</div>
  <div class="text">
    {@html prismicH.asHTML(slice.primary.text)}
  </div>
</article>
