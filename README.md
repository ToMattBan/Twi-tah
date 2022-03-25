# Cleyton Andre Lazzarini

## RoadMap
- HomePage
  - Filter
    - [x] See All Posts
    - [x] See Following Posts
    - [x] Change in URL
    - [x] Change in the page
  - Feed
    - [x] New Post
    - [x] List posts
    - [x] List quotes and reposts
    - [x] Quote, Repost
- ProfilePage
  - All of them
    - [x] Modal over HomePage
    - [x] Change URL
    - Data to Show
      - [x] Username (Alphanumeric 14char max)
      - [x] Date Joined (March 25, 2021)
      - [X] Number Followers
      - [x] Number Following
      - [x] Counting Posts (Including Repost and Quotes)
      - [x] Show feed with user posts (Repost and Quotes too)
  - Mine
    - [x] New Post
  - Others
    - [x] Show if you are following the user
    - [x] Give the option to follow/unfollow
- Posts
  - [x] User can just post 5 a day
  - [x] Text only
  - [x] 777 char max
  - [x] Show how many chars are left
  - [x] Auto resize the input


## How to run
- Install the dependencies with `npm install`
- Run with `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) 

## How filter
- http://localhost:3000/homepage?posts=following Will show just who you follow
- http://localhost:3000/homepage?posts=all Will show every post
- Anything else will show every post and correct the url

## Credits
- Icons from [SVGRepo](www.svgrepo.com/vectors)
- Users data from [RandomUser](randomuser.me)

## Coments
- On the homepage I tried to use SWR, but the data take too long to be received, So I changed it and used a simple fetch instead.
- I don't use twitter, so some concepts are really strange for me. The repply was really hard to understand
- The project has been coordinated with the idea, which users will use the project on mobile, so everything has been planned to run better on a phone. You can test it "simulating" a phone using the developer tools of the browser

## Plannig
- Questions
  - The replies will count on the daily limit of posts?
  - The limit will be increased?
  - The user will be able to reply to posts of people he don't follow?
  - The user will be able to reply to posts of people who don't follow him?
  - How will we call the first section of the user page, where we will show the quotes and reposts?
  - On the profile, the first tab will show posts, quotes, and reposts or just quotes and reposts since the replies will be shown with the replies on the "Post and Replies" tab?
  - Replies will count on the number of posts showed on the profile?
- Planning
  - Using the function who detects the length of the post, detect if a new post has a "@".
  - If found, change the postType flag to "4", because 1, 2 and 3 is already in use.
  - Using the number 4, the backend will understand that is a reply.
  - Also, will send to back-end what is mentioned using the @.
  - Now the back-end can return this info to front-end, so the next step is update the post component.
  - If a post is of type "4", the front would show what is preceded by the @ in bold to differentiate.
  - Now it's time to update the userpage
  - Ask for the backend two different endpoints, one which will show quotes and reposts (Q&R) and another to the original content (OC).
  - First, we will need to create the two tabs statically, one from Q&R and another from OC.
  - Applying the CSS estilize following the project scheme.
  - Start with the JS, create a function to handle the tab change, passing the tab name as params.
  - The JS function will change the 'active' class from one tab to another one.
  - Create two separate divs, one to accommodate the Q&R, and another one to accommodate the posts and replies.
  - The first div will be loaded with the page, and the second one just when the user change the tab.
  - Update the default function to get the posts data according to the tab the user chooses.
  - Update the map function on the original div for Q&R and create another on the new div for the OC.
  - Done!
  - 
  - This was made assuming the daily limit has not been increased and the backend update the info showing the correct number of posts

## Critique
- Improovments
  - Would adapt the project to reach the desktop users too;
  - Would do a better job with the colors and with the styles in general;
  - Would sync the posts created on userpage and homepage with each other;
  - Would improove UI/UX by seraching about and seeing more references than just Twitter.
  - Would make a better way to check the diary post limit
- Scaling
  - The first part to fail would be the daily limit. The users would give up the platform because of this.
  - The platform probably will be taken down because the great number of  simultaneous accesses
  - Would need to use a good database to store all the data and to be fast when some data are asked for
  - A lazy load would be necessary, maybe each 30 posts.
  - The chat option and comments would be nice to users interact with each other.
  - An option to block and report users would be necessary.
  - A tag system to separate the content by matter.
  - Would need to veridy offical accounts of famous people and public figures, enterprises and government too.