<script>
  import "../app.postcss";

  export let data;
</script>

<header class="bg-red-500 p-8">HEADER</header>

<slot />

<footer class="bg-green-500 p-8">FOOTER: {data.hello }</footer>