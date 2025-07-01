#### TTTT
### TenTenTechTest

## Contents

Notable things - Things to consider
Requirements - what I did and didn't do
Self feedback - What I think I did well on and what I could have improved on
Notable things pt. 2 - `Its a secret` 

## Notable things

1. I ran out of time before managing to finish the full list of scenarios.

As a result of this, I have made notDone.spec.ts which includes the remainder of the scenarios and how I would make them given I had the actual locators for error messages and such.

2. Before I registered, I created tests for screens that aren't in scope for the project because I appreciate the practise and hope my effort is appreciated also. I've timeboxed these efforts to a couple of hours in one evening. 

3. No bdd

I could have hooked this up to a BDD tool such as Cucumber, however, since I do not have any specific requirements, I have decided not to. As BDD is a team-wide way of working, not specific to automation/test/Qa/Qe.

4. POM vs Screenplay

Before writing any code, I have decided to use POM instead of Screenplay. This is because Screenplay has much better use cases in long, complex user journeys that I don't think the tech test would require me to follow in a two hour long window.

## Requirements

Please read Self feedback for explanations as to why I didn't manage to create tests for some requirements.

Tests created for: 
The application should provide options to choose the duration for interest calculation: Daily, Monthly, and Yearly.
Users should be able to input the principal amount.
Users should be able to select the interest rate from a predefined list of rates up to 15%.
The application should calculate the correct interest based on the selected duration, principal amount, and interest rate.
The application should display the calculated interest and the total amount including interest.

Tests not created for (due to time constraints):
All input fields (principal amount, interest rate, duration and consent) are mandatory.
The application should inform the user if any field is left empty or not selected.
For simplicity, the calculated interest and total amount should be rounded to two decimal places.
The application should be responsive and user-friendly.
Clear error messages should be displayed to guide users in case of missing or incorrect inputs.

## Self feedback

Overall, I am happy with how this tech test went as I managed to get some of the more logic-intense scenarios out of the way (for example the interest calculation)

# Strengths / things I'm happy with

I think the tests are very easy to follow. If I prioritised efficiency / using less code I would have made an array of 'values' objects and iterated through them, but I kept them seperate to ensure each test is readable and unique. Had I have used Cucumber, I would have used 'scenario outline' here. I think it is better to do it this way too, as if in the future, the developers added more components - such as a compound interest vs normal interest field, they might not want that on daily, as you cant calculate compound interest over one day (well, I guess you can, but, it is the same thing as normal interest).  

I'm also happy with the use of custom fixtures and how easy it is to integrate them within tests.

# Could have been better / things I got caught up on / things I wish I did 
1 - The principal value slider. I started off by using coordinates (`.boundingBox()`) and dragging and dropping on mouse clicks, which wasted around 10-15 minutes before deciding how codegen deals with it, to find you can just .fill() it.
2 - The interest calculation. It took me way too long to build the calculate function in utils.calculate.ts.
3 - Custom type. I started off by having a list of variables in the test (`const amount =` , `const duration =` etc) but decided I could type this into a custom type, which I should have refactored AFTER my time had expired.
4 - I didn't get the page objects before my time expired for all tests. 

# conclusion

I could have managed my time a LOT better by ensuring I acquired / made note of all page objects before fleshing out tests. At least that way I could have allowed myself the possibility of creating tests for outstanding requirements.

## Notable things pt2

I have made another branch with tests that I have missed called infiniteTime. I registered using a different email to do this, but it is to note that the main branch is the work I managed to complete within 2 hours. 