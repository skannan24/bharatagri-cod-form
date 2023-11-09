import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";


// not working
export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request);
  // const response = await admin.rest.get({ path: "/customers/count.json" });
  const response = await admin.rest.post({
    path: "/orders.json",
    data: {
      "order": {
        "line_items": [
          {
            "variant_id": 45462049161537,
            "quantity": 1
          }
        ],
        "customer": {
          "first_name": "Sundar",
          "email": "+919443987700@bharatagri.co"
        },
        "email": "+919443987700@bharatagri.co",
        "shipping_address": {
          "first_name": "Sundar",
          "address1": "HSR Layout, Sector 3",
          "phone": "+919443987700",
          "city": "Bangalore",
          "province": "Karnataka",
          "country": "India",
          "zip": "560102"
        },
        "billing_address": {
          "first_name": "Sundar",
          "address1": "HSR Layout, Sector 3",
          "phone": "+919443987700",
          "city": "Bangalore",
          "province": "Karnataka",
          "country": "India",
          "zip": "560102"
        },
        "financial_status": "unpaid",
        "discount_codes": [
          {
            "code": "BA_COMBO",
            "amount": 20,
            "type": "fixed_amount"
          }
        ]
      }
    }
  });
  const customers = await response.json();
  return json({ customers });
}
