import bcyrpt from "bcryptjs";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    firstName: "Manoj",
    lastName: "Sarna",
    email: "test@test.com",
    password: bcyrpt.hashSync("ManojTest@123", 5),
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
