# SBA 5: The Document Object Model

## A README.md file. This file should include:

### A brief description of your project.

### Instructions on how to run the application (if anything beyond opening index.html in a browser is needed).

### A reflection on your development process, challenges faced, and how you overcame them.

### Any known issues or features not implemented.

## Requirements

### Create New Posts:

[ ] A form with fields for a post title and post content (e.g., using `<input type="text">` for title and `<textarea>` for content).<br>
[ ] Upon submission, the new post should be added to a list of posts displayed on the page.<br>
[ ] The form should be validated: both title and content are required.<br>
[ ] Display custom, user-friendly error messages if validation fails.<br>

### Display Posts:

[ ] All created posts should be displayed on the page. Each displayed post should clearly show its title and content.<br>
[ ] Posts should be rendered dynamically using JavaScript.<br>

### Edit Posts:

[ ] Each displayed post should have an “Edit” button.<br>
[ ] Clicking “Edit” should allow the user to modify the title and content of that specific post. This might involve populating the main form (or a modal form) with the existing post data.<br>
[ ] After editing, the updated post should be reflected in the display.<br>
[ ] Form validation should also apply during editing.<br>

### Delete Posts:

[ ] Each displayed post should have a “Delete” button.<br>
[ ] Clicking “Delete” should remove the post from the display and from localStorage.<br>
[ ] Data Persistence with localStorage:<br>
[ ] All blog posts (title, content, and perhaps a unique ID and timestamp you generate) must be saved in localStorage.<br>
[ ] When the page is loaded or refreshed, any posts previously saved in localStorage should be retrieved and displayed.<br>
[ ] Updates (from edits) and deletions must also be reflected in localStorage.<br>
