<script>
  import EmailInput from "$lib/components/EmailInput.svelte";
  import PasswordInput from "$lib/components/PasswordInput.svelte";
  import UsernameInput from "$lib/components/UsernameInput.svelte";
</script>

<div class="flex flex-col min-h-screen justify-center items-center">
  <form
    class="flex flex-col min-h-screen gap-2 justify-center items-center"
    method="post"
  >
    <h1 class="text-3xl mb-2 font-bold">Create Account</h1>
    <UsernameInput />
    <EmailInput />
    <PasswordInput />
    <button class="btn btn-accent w-full" type="submit">Sign Up</button>
    <p class="mt-2">
      Already have an account? Login <a
        class="text-primary hover:underline"
        href="/auth/login">here.</a
      >
    </p>
  </form>
</div>
