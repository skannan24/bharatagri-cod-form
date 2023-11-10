import { json } from '@remix-run/node';
import { authenticate } from "~/shopify.server";

export async function loader({ request }) {
  // const { admin, session } = await authenticate.admin(request);
}

export async function action({ request }) {
  try {
    console.log(request.json());
    const data = await request.json();
    // process data
    const response = {};
    return json(response);
  } catch (error) {
    // handle error
  }
}
