import { authClient } from '$lib/auth-client';
import { redirect } from '@sveltejs/kit';

/** @satisfies {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    try {
      const data = await request.formData();
      const username = data.get('username');
      const email = data.get('email');
      const password = data.get('password');

      const { userData, error } = await authClient.signUp.email({
        email: email,
        password: password,
        name: username
      });

      throw redirect(308, "/")
    } catch (err) {
      console.error(err);
    }
  }
};
