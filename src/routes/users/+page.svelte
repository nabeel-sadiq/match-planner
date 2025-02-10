<script>
  let count = $state(0);

  const increment = () => {
    count++;
  };
</script>

<button onclick={increment} class="btn btn-primary">Count: {count}</button>
