# NatureD

## Project Description

<!-- Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and/or functionality. -->

The purpose of this app is to be an ecomerce site for sports and outdors activity. Where users are able do buy their favorite gear to help them fullfill their goals for their fitness and hobbies.


- Site Example 1: https://www.amazon.com/
- Site Example 2: https://www.ebay.com/

## Wireframes

<!-- Include images of your wireframes.  -->
![wireframe1](images/wireframe1.jpg)

## Database Schema

### Table Name: users
| Column Name | Data Type |
| --- | :---: |
| id | primary key |
| username | text not null |
| email | text not null |
| password_digest | text not null |
| birthday |  |

### Table Name: products
| Column Name | Data Type |
| --- | :---: |
| id | primary key |
| user_id | references users(id) |
| name | text not null |
| description | text |
| price | integer not null |
| category_id | references categories(id) |
| image_url | text not null |
| amount | integer |

### Table Name: categories
| Column Name | Data Type |
| --- | :---: |
| id | primary key |
| category | ex) Hiking, Camping, Fishing, etc. |

### Table Name: payment_info 
| Column Name | Data Type |
| --- | :---: |
| id | primary key |
| card_no | integer not null |
| payment_type | ex) VISA, Mastercard, etc. |
| card_name | text not null |
| address_id | references shipping_address(id) |

### Table Name: shipping_address
| Column Name | Data Type |
| --- | :---: |
| id | primary key |
| address | text not null |
| zip_code | integer not null |
| state_id | references states(id) |

### Table Name: states
| Column Name | Data Type |
| --- | :---: |
| id | primary key |
| state | VARCHAR(2) |

### Table Name: cart
| Column Name | Data Type |
| --- | :---: |
| id | primary key |
| user_id | references users(id) |
| product_id | references product(id) |

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix. 

| Component | Priority | Estimated Time |
| --- | :---: |  :---: |
| Database Setup | 1 | 1hrs|
| Auth | 2 | 1hrs| 
| File Structure | 3 | 1hrs| 
| Page Layout | 4 | 6hrs| 
| Page Navigation | 5 | 4hrs| 
| Page Design | 6 | 9hrs|
| Total |  | 22hrs| 



## App Components

### Landing Page
<!-- What will a user see when they start your app? -->
A user will see a nav bar at the top with our logo and the login/signup link ass well.

Furthermore, bellow the navbar a grid with asthetic images will appear, each representing a different sport/category. In each grid square there will be a link with the name of each category.

When cliked the link will redirect to a page listing products from that category. 

### App Initialization
<!-- What will a user see when the app is started?  -->
When the app is started the user will be able to see the the landing products and view specific categories and products. However, they wont be able to buy products unless they create an acoount or log in to an existing account.

### Using The App
<!-- What will be the flow of the game, what will the user be expected to do and what will the user expect from the game. -->
User will be able to view all products and filter products by categories, by clicking links in the landing page and filtering in the products page. A unregistered user will only be able to buy a product when signing up or loging in. The users can create new products, update existing ones, view their products and delete old ones. Similarly, users are able to view all products, filter by category, save to their cart and delete from their cart, and buy products. They do so by navigating through the links and pressing a add button in each product. When this is pressed the product is saved to their cart. After the user has saved all the products that are desired they can press the cart icon to go to the buying page. Where they enter their card to pay for the item. 


## MVP 

<!-- Include the full list of features that will be part of your MVP  -->

Users who are buyers are able to:

* create an account.
* Delete their account.
* Update their account.
* View all products.
* View by catgories.
* Create a product.
* Delete the product.
* Update their product.
* View all their products.
* View a product.
* Add to cart.
* Delete from cart.
* Buy product.


## POST MVP

<!-- Include the full list of features that you are considering for POST MVP -->

User:
·Add ratings and comments.
Us:
·Add a pop up login page for login/ signup.



## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Database Setup | 1 | 1hrs| 1hrs | 1hrs |
| Auth | 2 | 1hrs| 1hrs | 1hrs |
| File Structure | 3 | 1hrs| 1hrs | 1hrs |
| Page Layout | 4 | 8hrs| 6hrs | 6hrs |
| Page Navigation / Routes | 5 | 4hrs| 2hrs | 2hrs |
| Page Design | 6 | 9hrs| 12hrs | 12hrs |
| App Logic | 7 | 10hrs| 12hrs | 12hrs |
| Post-MVP | 8 | 7hrs| 1hrs | 1hrs |
| Total |  | 38hrs| 34hrs | 34hrs |

## Technologies Used

* Mashape Random Quotes API

    - A collection of 60000+ Quotes with hundreds of different categories. Able to generate a random quote based on categories.


