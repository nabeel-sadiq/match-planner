<script>
  let password_input = $state();
  let btn = $state();

  let togglePassword = () => {
    password_input.type === "password"
      ? (password_input.type = "text")
      : (password_input.type = "password");

    btn.textContent === "Show"
      ? (btn.textContent = "Hide")
      : (btn.textContent = "Show");
  };
</script>

<div class="relative">
  <label class="input validator">
    <svg
      class="h-[1em] opacity-50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      ><g
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="2.5"
        fill="none"
        stroke="currentColor"
        ><path
          d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
        ></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"
        ></circle></g
      ></svg
    >
    <input
      type="password"
      required
      bind:this={password_input}
      name="password"
      placeholder="Password"
      minlength="8"
      pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{'{'}8,{'}'}$"
      title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
    />
  </label>
  <button
    aria-label="Show or Hide Password"
    type="button"
    onclick={togglePassword}
    bind:this={btn}
    id="show-password"
    class="absolute top-2 right-3 bg-transparent border-none cursor-pointer"
  >
    Show
  </button>
</div>
<p class="validator-hint hidden">
  Must be more than 8 characters, including
  <br />At least one number
  <br />At least one lowercase letter
  <br />At least one uppercase letter
</p>
