<script lang="ts">
    import * as prismicH from '@prismicio/helpers';
    import { page } from '$app/stores';
  
    export let data;
  
    const { navigation } = data;
</script>

<div class="px-6">
    <div class="flex flex-row">
      <div class="basis-1/3">
        <a href="/"><img src="wwslogo-mktg-website.jpeg" alt=""></a>
      </div>
      <div class="basis-2/3">
        <nav class="grid grid-cols-6 gap-4">
          {#each navigation as item}
            {@const activeLink = item.link.url === $page.url.pathname}
            {#if activeLink}
              <span>{item.link_label}</span>
            {:else}
              <a href={prismicH.asLink(item.link)}>{item.link_label}</a>
            {/if}
          {/each}
      </nav>
      </div>
    </div>
    <main class="center">
      <slot />
    </main>
  
    <footer class="center">© Acme Corporation 2023</footer>
  </div>  