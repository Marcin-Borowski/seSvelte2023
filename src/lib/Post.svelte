<!-- @format -->
<script>
  import { createEventDispatcher } from "svelte";


  const dispatch = new createEventDispatcher();

  export let title = "Lorem ipsum 1";
  export let slug;

  const onDelete = () => {
    dispatch('remove', slug)
  }

</script>

<div class="border border-stone-500 bg-stone-100 drop-shadow-md p-4">
<a href={`/posts/${slug}`}>
  <h2>{title}</h2>
  <div>
    <slot />
  </div>

</a>

<button on:click={onDelete} class="bg-red-500 text-white px-3 py-1">DEL</button>
</div>