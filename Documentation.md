The problem statement I chose to work on was "Simple Library Management" under the problem statements of Front-end and here is the detailed documentation for it.

**Overview**:
    - The Library Management System is a software application designed to efficiently manage and resources of a library and the name of the e-library software is "Text Studio". It provides users
    and library staff(admins) to flexibly search for their desired books. The software first lands with a homepage which will display the books as a card. The cards include information such as
    book title, author, the date of publishing and the subject. And there is a fiter tab provided in the top just below the header, which allows you to search for a particular book on the webpage.
    The filter can be applied for the book name which is a primary requirement and as additional filter fields an user can also filter out based on author's name, published date and the subject.

**Code Structure**:

    **_index.html_**:
    - The project starts with a login page, where the user can login, if they already have an account or are an existing user (or) can create a new account by registering themselves up for it.
    - For the current time being, the only avaiable user is "admin" with password "123456". The user can give the credentials in the available input fields and then after clicking the "Log In" button,
      the function called "validate()" will be called.
    - The function will get the entered username and password using the document.getElemenyById() method in js for the ids "username", which is for username and the value is stored in uname variable
      and "userpwd" for user password which is stored in a variable upwd.
    - It will validate if the username given and the password match.
    - After successful login, the user is directed to the home page after giving the alert that login was successful and the user is directed to Display page.

    **_Display.html_**:
    - The file starts with a title as home page and the stylesheet is linked seperately using the link tag and these are embedded inside the "head" tag. 
    - The script links to the "Display.js" file.
    - Then the body tag begins with a header tag, which has a appilcation name in the center, a home link, about us, contact and login which are yet to be hyperlinked.
    - A section tag begins which has an inline style "background-color: #00BFA6;". This tag has a further section tag with the class name "filtergrid". This has 4 individual div tags to get input from
      users such as book name, author name, subject and publish date. Outside the child section tag and inside the parent section tag, there are two buttons. One is "Apply filters", which basically
      calls a function "applyFilters()" and another button "Reset" to call the "Reset()". These functions purpose and functionalities are explained in "Display.js".
    - Then is followed by a div tag with the id "search", intially the tag is empty with no context in it but the tag's purpose is to give statements about the search results such as "Your search showed
      0 results".
    - After that comes the final section tag with class name as "grid" and id as books. This tag's main purpose is to align the book's cards in a grid like format with each row consisting of 4 cards.
    - Currently the total number of cards used for displaying is 12. All the div tags or the child nodes inside the section tag are of similar format.
    - Each div tag has the class name "card". Inside each div tag, there 5 tags. A h2 tag which displays the book name, three paragraph tags that showcase the author name, publish date and subject
      respectively. Then an anchor tag with class name "downloadURL" with download attribute to download the necessary book and also a button showing download.
    - The button tag and the span tag inside it are for the sole purpose of styling. 

    **_Display.js_**:
    - This file has 2 major functions: "applyFitlers()" and  "Reset()".
    - The Reset() function just resets all filters that were applied and displays back all the cards. 
    - The applyFilters() as the name suggests applies constraints to the cards based on book name, author name, subject and publish date. 
    - First it'll extract all the filters entries that were applied and store them into variables authorname for author's name, book for book name, subject for the book's subject and publish for the
      publish date. 
    - The date that is inputted is given in the format of yyyy-mm-dd and so for the convenienve, the date is reformatted by making it into "dd/mm/yyyy" format and the new format is stored in publish variable.
    - The user need not alywas use all of the filter fileds to shorten his search and so the fields with no values or NaN values or undefined, they're assigned as empty strings.
    - Then a variable "cards" will be used to extract all the child nodes with the class name "card" in the section tag with cards and a counter variable is initialized for a later purpose.
    - A loop is initiated with the cards length which in this will be 12 always. 
    - Through every iteration, the respective child nodes book name is extracted using the "getElementsByName()" function, and the text inside is converted to lowercase as the application must be able to
      extract the results irrespective of the case. 
    - Four variables flag1, flag2, flag3 and flag4 are set to 0, then a series of if statements is constructed to determine if the particular search input lies in any of the cards. The if statement is True
      when the input in filter field after processing is either empty or the input given resides in the card's text. Upon either of them being True, the flag values are set to 1.
    - If all the flags are re-evaluated to one, then the card is set to a display style of "block" and is displayed and the counter variable mentioned earlier is also incremented, else the card is hidden
      using the "none" display style.
    - Outside the loop, the would be an if-else statement which checks if there are any matches for the search results. If there are no matches, then the "div" tag with id as "search" will show text as 
      "Oops! Your search showed 0 results!", else it'll display "Your search showed "+counter+" result(s)!", where the counter can be any value ranging from 1 to 12.
    
    **_Display.css_**:
    - This file has the styling for the "Display.html" page.
    - First with the body tag's css setting the font and margin and padding attributes.
    - ".filtergrid div" to push the filter inputs towards the inside. 
    - "header" to style the header tag.
    - "header span a" - to style the header's anchor tags.
    - "header span span:hover" to only highlight the particular anchor tag that is being hovered upon.
    - "section div p" font size is set to 20px for the card contents.
    - ".filtergrid" to align the filter inputs as grid items by setting the display to "grid".
    - ".filter" is for the Apply filters and reset button.
    - ".filter:hover" to apply properties when hovered over the button.
    - ".filter:active" to apply properties while the button is being touched.
    - "label" to decorate the display names for filter fields and the "input" to decorate the input field.
    - ".card" to decorate the individual cards that are showed on the main display page.
    - ".grid" to align the book cards into grid items by setting display to "grid" and the number of cards to be displayed on each row is 4.
    - ".download" with pseudo selectors to decorate the download button on each card and ".download-content", to display after hovering the button.
    - ".downloadURL" class to position the download button to the bottom of the card.

**Installation**:
    There are no explicit pre-requisites needed for the usage, however an updated version of Chrome or any other browser is much appreciated.

**Usage**:
    - Login into the system using your account(currently this feature is unavailable).
    - After successful login, the user will be directed to the Home page, where they can see the list of books available to them. 
    - Type in the values in the relevant filter fields and click on apply filters button.
    - Provided there are any matches, then the results are displayed in the same grid like format with a maximum of 4 cards in a row and the number of cards that match your search is also displayed.
    - If there are no results that match your search then it is displayed that no results found.
    - If you want to reset your filter options, then you can click on the reset button and all the cards are displayed back again.

**Error Handling**:
    - Beginning with the login page, if the user tries to login without entering an username or password or both, then the user is asked to enter the credentials.
    - If the user provides invalid credentials, then user will get an alert message saying that the credentials are wrong.
    - In the applyFilters(), the user might not enter values into all of the filter options provided to them and so, if the values are empty then the variables will extract values as NaN or undefined
      and so to prevent this, the variable's values are checked and if they are undefined or NaN, then they are assigned as empty strings.
    - After searching through every card, if there are no matches found, then only a blank page will be displayed and the users might get confused that their request is still processing. To avoid
      this conflict, no search results appeared is displayed.
    - Upon pressing Reset button, the cards might not be displayed back like they used to appear as it only clears the input fields for filter function. Considering this as an error, iterate
      through every card and set their display to "block".

**Version History**:
    - The current deplyment is of version 1.0. Upon making minor changes to the source code, update the decimal value of the version number by 1. For eg: Version 1.1 to 1.2, 2.3 to 2.4 and so on.
    - If there are any major changes made, then update the unit digit's value by adding 1. For eg: Version 1.2 to 2.0.
