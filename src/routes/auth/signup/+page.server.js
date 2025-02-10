import { authClient } from '$lib/auth-client';

/** @satisfies {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const username = data.get('username');
    const email = data.get('email');
    const password = data.get('password');

    const { userData, error } = await authClient.signUp.email({
      email: email,
      password: password,
      name: username
    });
  }
};
