import { authClient } from '$lib/auth-client';
import { redirect } from '@sveltejs/kit';

/** @satisfies {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    try {
      const data = await request.formData();
      const email = data.get('email');
      const password = data.get('password');

      const { userData, error } = await authClient.signIn.email({
        email: email,
        password: password,
      });

      throw redirect(308, "/")
    } catch (err) {
      console.error(err);
    }
  }
};
