<script lang="ts">
  export let text: string;
  
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button type="button" class="btn variant-filled-primary" on:click="{handleClick}">
  {text} {count}
</button>
