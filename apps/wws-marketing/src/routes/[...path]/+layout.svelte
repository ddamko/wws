<script lang="ts">
    import * as prismicH from '@prismicio/helpers';
    import { page } from '$app/stores';
  
    export let data;
  
    const { navigation } = data;
</script>

<div id="page">
    <nav class="center">
        {#each navigation as item}
          {@const activeLink = item.link.url === $page.url.pathname}
          {#if activeLink}
            <span>{item.link_label}</span>
          {:else}
            <a href={prismicH.asLink(item.link)}>{item.link_label}</a>
          {/if}
        {/each}
    </nav>
  
    <main class="center">
      <slot />
    </main>
  
    <footer class="center">© Acme Corporation 2023</footer>
  </div>  