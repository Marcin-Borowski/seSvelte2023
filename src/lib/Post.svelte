<!-- @format -->
<script>
  export let title = "Lorem ipsum 1";
  export let slug;
</script>

<a href={`/posts/${slug}`} class="border border-stone-500 bg-stone-100 drop-shadow-md p-4">
  <h2>{title}</h2>
  <div>
    <slot />
  </div>
</a>
