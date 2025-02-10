import { authClient } from '$lib/auth-client';

/** @satisfies {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');

    const { userData, error } = await authClient.signIn.email({
      email: email,
      password: password,
    });
  }
};
