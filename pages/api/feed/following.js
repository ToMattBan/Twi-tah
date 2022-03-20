export default async (req, res) => {
    /* 
      Explanation post json
      {
        userName: String with username
        profilePic: url to image
        userId: uid,
        timePosted: time not formated
        typePost: 1 to original, 2 to repost, 3 to quote
        originalPost: content of post
        originalUser: if a repost ou quotte, the original author
        originalTime: if a repost ou quotte, the original date
        quote: if quoted, what the user write?
      }
    */
  
    const posts = [
      {
        userName: "Tauranga",
        profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
        userId: 4186453486,
        timePosted: new Date('March 15, 2022'),
        typePost: "1",
        originalPost: "I don't know where I need to go to get the new Pokemon",
        originalUser: null,
        originalTime: null,
        quote: null,
      },
      {
        userName: "Tauranga",
        profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
        userId: 4186453486,
        timePosted: new Date('March 20, 2021'),
        typePost: "1",
        originalPost: "This is a post with the max length a post can have. It is a lot of characters, but there are people out there who like writing long texts, but I think I'm not one of them, I prefer short posts, you see. You can see all my old posts and you will notice none of them will reach the max character length of each post.But this isn't what I came to say. I want to say to you: \"If your car don't got a horn, and you don't like popcorn, don't worry, it doesn't matter. If your heart is very able, and the book is on the table, don't worry, it doesn't matter.\" If you know where did I got this from, I know you are a person of culture, as well. There aren't a lot of people who like a good piece of art in these days and I can say that I'm one of these restricted people who like it =)",
        originalUser: null,
        originalTime: null,
        quote: null,
      },
    ]
  
    res.json(posts)
  }