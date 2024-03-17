# hyte-server back-end server
Node.Js + Express

Start dev server: `npm run dev`

/items



example queries
# Login
POST https://hyte-server-aura.northeurope.cloudapp.azure.com/api/users/login
content-type: application/json
{
  "username": "johnDoe4",
  "password": "Hashed_password4"
}

## Get user by token (requires token)
GET https://hyte-server-aura.northeurope.cloudapp.azure.com/api/auth/me
Authorization: Bearer <token>

/api/users

example queries
# Get all users (requires token)
GET https://hyte-server-aura.northeurope.cloudapp.azure.com/api/users
Authorization: Bearer <token>

# Get user by id (requires token)
GET https://hyte-server-aura.northeurope.cloudapp.azure.com/api/users/:id
Authorization: Bearer <token>

# Delete user (requires token)
DELETE https://hyte-server-aura.northeurope.cloudapp.azure.com/api/users/:id
Authorization: Bearer <token>

# Create user (register)
POST https://hyte-server-aura.northeurope.cloudapp.azure.com/api/users
content-type: application/json

{
  "username": "johndoe4",
  "password": "hashed_password4",
  "email": "email@email.com"
}

# Update user's own data (requires token)
PUT https://hyte-server-aura.northeurope.cloudapp.azure.com/api/users/
Authorization: Bearer <token>
content-type: application/json

{
  "username": "johndoe4",
  "password": "hashed_password4",
  "email": "email@email.com"
}

hyte-server-aura.northeurope.cloudapp.azure.com


/api/entries

example queries
# Get all entries for a logged in user (requires token)
GET https://hyte-server-aura.northeurope.cloudapp.azure.com/api/entries
Authorization: Bearer <token>

# Get entries by id
GET https://hyte-server-aura.northeurope.cloudapp.azure.com/api/entries/:id

# Post entry
POST https://hyte-server-aura.northeurope.cloudapp.azure.com/api/entries
content-type: application/json

{
  "user_id": 9,
  "entry_date": "2024-03-17",
  "mood": "Sad",
  "weight": .6,
  "sleep_hours": 7,
  "notes": "This was a good day"

}

# Update entry
PUT https://hyte-server-aura.northeurope.cloudapp.azure.com/entries/:id
content-type: application/json

{
  "user_id": 9,
  "entry_date": "2024-17-03",
  "mood": "Happy",
  "weight": 80.2,
  "sleep_hours": 9,
  "notes": "This was a ok day, sleep was good though",

}

# Delete entry
DELETE https://hyte-server-aura.northeurope.cloudapp.azure.coma/api/entries/:id


![Database structure](database.png)


![Front page](indexhtml.png)


![Login page](loginpage.png)

![Registeration page](registeration.png)

![Profile Page](profilepage1.png)

![Pofile Page](profilepage2.png)

![Profile Page](profilepage3.png)


Known bugs:

Delete user function not yet working from the page, will be fixed as soon as possible.
Clear front end messasing will be implemented.
Some minor graphical issues might be possible.
There is a chance that if you double press login, you get to the profile page.

Please report any other odd behavior on the page, I will try to patch them as well as I can.

refrencies:

https://www.w3schools.com/w3css/4/w3.css (used in frontend design)
https://www.w3schools.com/w3css/tryw3css_templates_start_page.html(template page used in frontend)





