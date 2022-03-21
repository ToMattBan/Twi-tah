# Cleyton Andre Lazzarini

## RoadMap
- HomePage
  - Filter
    - [x] See All Posts
    - [x] See Following Posts
    - [x] Change in URL
    - [x] Change in the page
    - [ ] Save on localHost the option
  - Feed
    - [ ] New Post
    - [x] List posts
    - [x] List quotes and reposts
    - [ ] Quote, Repost
- ProfilePage
  - All of them
    - [x] Modal over HomePage
    - [x] Change URL
    - Data to Show
      - [ ] Username (Alphanumeric 14char max)
      - [ ] Date Joined (March 25, 2021)
      - [ ] Number Followers
      - [ ] Number Following
      - [ ] Counting Posts (Including Repost and Quotes)
      - [ ] Show feed with user posts (Repost and Quotes too)
  - Mine
    - [ ] New Post
  - Others
    - [ ] Show if you are following the user
    - [ ] Give the option to follow/unfollow
- Posts
  - [ ] User can just post 5 a day
  - [ ] Text only
  - [ ] 777 char max
  - [ ] Show how many chars are left


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
- On the homepage I tryied to use SWR, but the data take too long to be received, So I changed it and used a simple fetch instead.