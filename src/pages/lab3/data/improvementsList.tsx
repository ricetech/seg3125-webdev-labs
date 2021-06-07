import React from "react";

export const ImprovementsList = () => (
  <div className='mt-2'>
    <h5>Words</h5>
    <ul>
      <li>
        Previously, the wording on the navigation buttons was inconsistent ('Continue Shopping', 'Go to Cart').
        These have been standardized to 'Back to [page name]' and 'Continue to [page name]'.
      </li>
      <li>
        Some pages were lacking in explanation or help text. This has been added, specifically on the Preferences page
        and the text shown on the Cart page when the cart is empty.
      </li>
    </ul>
    <h5>Components</h5>
    <ul>
      <li>
        Several components (mostly buttons) received new alignment CSS to clean up the layout and give the website
        a more consistent appearance.
      </li>
      <li>
        Preferences are now set using Switches instead of Checkboxes as these provide more visual feedback to the user,
        are more visually appealing and have a larger area to click or tap on.
      </li>
      <li>
        A confirmation modal was introduced prior to emptying the cart to help catch unintended clicks of the empty cart
        button by the user.
      </li>
    </ul>
    <h5>Navigational Patterns</h5>
    <ul>
      <li>
        The dropdown navigation menu from Lab 2 was inefficient and required too many clicks/taps from the user.
        I replaced it with a separate, smaller navbar that only shows up on the Lab 3 page.
      </li>
      <li>
        The Lab 2 Preferences page did not give an easy way for the user to proceed to the next step (Products).
        Additionally, the Products page lacked a 'go back' button to return to the preferences.
        Standardized previous and next step buttons have been added to all three pages.
      </li>
    </ul>
    <h5>Persona - Nara (Lactose-intolerant, visually impaired)</h5>
    <ul>
      <li>
        I designed the website in a responsive manner so that Nara can zoom into the website without any of the
        components or text malfunctioning. This helps me avoid increasing the font size to a point where it would
        become jarring or otherwise uncomfortable for other users.
      </li>
      <li>
        The container width for the Products page was increased to allow the data to spread out over more space
        for improved readability.
      </li>
      <li>
        The size of the secondary navbar for Lab 3 is larger for easier readability.
      </li>
    </ul>
    <h5>Persona - Yao (Nut allergy, preference for organic products)</h5>
    <ul>
      <li>
        To better inform Yao of the potential causes for why a item might cost more,
        checkboxes indicating the dietary restrictions and preferences that each product satisfy have now
        been added to the Products page. This means that they are now visible without the user having to actually
        apply any preferences on the Preferences page.
      </li>
      <li>The list of products is sorted by price to help Yao find the cheaper items first.</li>
    </ul>
    <h5>Persona - Vanessa (Browses from many different devices)</h5>
    <ul>
      <li>
        The table showing the list of products has been made responsive so that it allows for horizontal scrolling
        of the table itself on mobile devices instead of the entire page scrolling left to right.
      </li>
      <li>
        I also tested the website on my own phone to check for usability constraints.
      </li>
    </ul>
    <h5>Persona - George (Busy student)</h5>
    <ul>
      <li>
        The Cart page now has "Remove Item" buttons on every product to save time in the event of an accidental
        addition of a product to the cart - that can now be reversed without having to empty the entire cart.
      </li>
    </ul>
    <h5>Other changes</h5>
    <ul>
      <li>The "Cart" page title was hidden if the cart was empty. This has been fixed.</li>
      <li>
        The previous and next step buttons are now aligned such that previous buttons are always left-aligned and
        next step buttons are always right-aligned for consistency and ease of understanding.
      </li>
      <li>
        The buttons in the Products and Cart tables were set to align to the right to look better.
      </li>
      <li>Attempting to access the '/lab3/' URL automatically redirects to '/lab3/preferences/'.</li>
    </ul>
  </div>
)
