/*
  Title: Categories API
  Created By: Nicolas Clocksin

  Description: API functions to manage categories.
*/
import "../types.js";
/**
 *
 * @returns {Promise<Category[]>}
 */
export async function CategoriesList() {
  return [
    {
      id: 1,
      name: "Toys",
    },
    {
      id: 2,
      name: "Video Games",
    },
  ];
}
