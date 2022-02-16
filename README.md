This is a limited mock-up version of an existing Bonsai ecommerce site for the sale of Bonsai and Bonsai supplies. Permission of use for all sources for this site were given by the owner and are limited to:

1. Logo Image
2. Collage Image
3. About Me Text

All other sources can be found in the seeds file of this repository.

Basic Navigation:

NavBar:

- Logo (Alternative Link to Home)
  (No User Logged in)
- Login Button (Login Form for existing Users)
- Signup Button (Signup Form for New Users)
  (User is Logged in)
- User Image (User Editing Form to update Username and Image)
- Logout (Ends User's Session)

Menu:

- Home (Links to Home)
- Bonsais (Listing of Plants for Sale)
- Supplies (Listing of Supplies for Sale)
- Cart (Listing of User's Selected Items)

Pages:

Home:
A Welcome Message and AboutMe written by the owner along with a collage.

Bonsai/Supplies:
A listing of Items for sale split by the product type. Each item has a name, image, price, age (N/A for supplies), and a button to add to the shopping cart. When added to the cart, you have a choice to navigate to the cart, or stay on the current page and continue shopping.

Cart:
A listing of items selected by the user along with a total of all items at the bottom. The user has the choice of removing individual items from the cart, or checking out. A dialogue option is presented for removing an item with the choice to follow through with the action or return to the cart without removing the item. Upon Checkout, items are removed from the cart and a "thanks for shopping" alert is displayed.

Forms:

Login:
A dialogue form with fields for a username and a password. If the user exists and the password is correct, the user will be logged in. If the password does not match, the user will not be logged in. \*

<!-- * A notification will appear with an error message (currently causing crashes and disabled) -->
<!-- * login is currently case-sensitive - plans to authenticate without case-sensitivity for username for future release -->

Signup:
A dialogue form with a field for a username, password, password confirmation, and a profile picture. The username must not already exist and the password confirmation must match the password; if either condition is not met, a notification to check entries will appear.

Update-User:
A form with options to update the user's information. "Update Username" will allow the user to change their username as long as it does not already exist. "Update Profile Picture" will allow the user to change their profile picture displayed in the NavBar. The last option is a "DELETE USER" button that removes the user from the database, along with any contents in their cart. \*

<!-- * There are no safegaurds around this button as of yet. An Dialogue Option will be set along with validation -->
<!-- * Update Password currently disabled due to backend setup for validation -->

Updates/Bug Fixes:

021622:

-
