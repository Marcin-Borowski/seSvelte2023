<!-- @format -->
<script>
  import Post from "$lib/Post.svelte";
  export let data;

  let posts  = data.posts;

  const onDelete = async (event) => {
    const response = await fetch('/api/posts/', {
      method: 'DELETE',
      body: JSON.stringify({slug: event.detail}), 
      headers: {
        "Content-Type" : "application/json"
      }
    })

    const result = await response.json();

    if (result.success) {
      posts = result.posts;
    }
  }

</script>

<form method="POST" action="?/create" class="mx-auto w-1/3 bg-orange-600 flex flex-col space-y-4 mb-8 p-4">
  <input name="title" class="p-2 text-black" placeholder="Enter a title…" />
  <textarea name="abstract" class="p-2 text-black" placeholder="Enter an abstract…" />
  <button class="bg-white text-red-500 hover:bg-stone-300 px-3 py-1">Add</button>
</form>

<div class="grid grid-cols-3 gap-4">
  {#each posts as post}
    <Post title={post.title} slug={post.slug} on:remove={onDelete}>
      {post.abstract}
    </Post>
  {/each}
</div>
