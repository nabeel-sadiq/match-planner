<script>
  import EmailInput from "$lib/components/EmailInput.svelte";
  import PasswordInput from "$lib/components/PasswordInput.svelte";
</script>

<div class="flex flex-col min-h-screen justify-center items-center">
  <form
    class="flex flex-col min-h-screen gap-2 justify-center items-center"
    method="post"
  >
    <h1 class="text-2xl font-bold">Login</h1>
    <EmailInput />
    <PasswordInput />
    <button class="btn btn-accent w-full" type="submit">Login</button>
  </form>
</div>
