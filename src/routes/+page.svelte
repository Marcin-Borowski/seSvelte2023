<!-- @format -->
<script>
  import Post from "../lib/Post.svelte";

  let posts = [
    {
      title: "title 1",
      abstract: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quasi deleniti aspernatur labore vitae! Expedita repellat ipsam reprehenderit quod assumenda, temporibus harum omnis deserunt iste animi, pariatur non. Voluptates, dolore?",
    },
    {
      title: "title 2",
      abstract: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quasi deleniti aspernatur labore vitae! Expedita repellat ipsam reprehenderit quod assumenda, temporibus harum omnis deserunt iste animi, pariatur non. Voluptates, dolore?",
    },
    {
      title: "title 3",
      abstract: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quasi deleniti aspernatur labore vitae! Expedita repellat ipsam reprehenderit quod assumenda, temporibus harum omnis deserunt iste animi, pariatur non. Voluptates, dolore?",
    },
  ];

  let title = "";
  let abstract = "";

  const onAddPost = () => {
    if (title && abstract) {
      posts = [
        ...posts,
        {
          title,
          abstract,
        },
      ];

      title="";
      abstract = "";
    }
  };
</script>
<div>
  <h1 class="text-5xl text-center my-4">Posts</h1>

  <div class="bg-red-500 text-white p-4 flex flex-col gap-4 w-2/5 mx-auto my-8">
    <input bind:value={title} class="p-2 text-black" placeholder="Enter a title…" />
    <textarea bind:value={abstract} class="p-2 text-black" placeholder="Enter an abstract…" />
    <button on:click={onAddPost} class="bg-white text-red-500 hover:bg-stone-300 px-3 py-1">Add</button>
  </div>

  <hr />

  <div class="grid grid-cols-3 gap-4">
    {#each posts as post}
      <Post title={post.title}>
        {post.abstract}
      </Post>
    {/each}
  </div>
</div>

