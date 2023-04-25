<!-- @format -->
<script>
  export let data;

  const { post } = data;
</script>


<h1>{post.title}</h1>

<p>{post.abstract}</p>

<hr />

<div>
  {post.body}
</div>
