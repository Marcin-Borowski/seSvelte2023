<!-- @format -->
<script>
  import Post from "$lib/Post.svelte";
  export let data;

  const { posts } = data;
</script>

<div class="grid grid-cols-3 gap-4">
  {#each posts as post}
    <Post title={post.title} slug={post.slug}>
      {post.abstract}
    </Post>
  {/each}
</div>
