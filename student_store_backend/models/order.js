const db = require("../db");
const { BadRequestError, NotFoundError } = require("../utils/errors");

class Order {
  static async listOrderForUser() {
    //Will be able to return all orders that the authenticated user has created
  }
  static async createOrder({ user, order }) {
    if (!order) {
      throw new BadRequestError("No order is provided");
    }
    if (!user) {
      throw new BadRequestError("No order is provided");
    }

    const results = await db.query(
      `
     INSERT INTO orders (customer_id)
     VALUE (SELECT id FROM users WHERE email = $1)
     RETURNING id;   
    `,
      [user.email]
    );
    const orderId = results.rows[0].id;
  }
}
module.exports = Order;
