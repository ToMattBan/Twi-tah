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
      quote: if quoted, what the user write?
    }
  */

  const posts = [
    {
      userName: "Van der Sluis",
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
      userId: 4186453486,
      timePosted: new Date('March 20, 2021'),
      typePost: "1",
      originalPost: "This is a post with the max length a post can have. It is a lot of characters, but there are people out there who like writing long texts, but I think I'm not one of them, I prefer short posts, you see. You can see all my old posts and you will notice none of them will reach the max character length of each post.But this isn't what I came to say. I want to say to you: \"If your car don't got a horn, and you don't like popcorn, don't worry, it doesn't matter. If your heart is very able, and the book is on the table, don't worry, it doesn't matter.\" If you know where did I got this from, I know you are a person of culture, as well. There aren't a lot of people who like a good piece of art in these days and I can say that I'm one of these restricted people who like it =)",
      quote: null,
    },
    {
      userName: "Mademoiselle",
      profilePic: "https://randomuser.me/api/portraits/women/15.jpg",
      userId: 1672746848,
      timePosted: new Date('March 23, 2021'),
      typePost: "2",
      originalPost: "This is a post with the max length a post can have. It is a lot of characters, but there are people out there who like writing long texts, but I think I'm not one of them, I prefer short posts, you see. You can see all my old posts and you will notice none of them will reach the max character length of each post.But this isn't what I came to say. I want to say to you: \"If your car don't got a horn, and you don't like popcorn, don't worry, it doesn't matter. If your heart is very able, and the book is on the table, don't worry, it doesn't matter.\" If you know where did I got this from, I know you are a person of culture, as well. There aren't a lot of people who like a good piece of art in these days and I can say that I'm one of these restricted people who like it =)",
      quote: null,
    },
    {
      userName: "Poitiers",
      profilePic: "https://randomuser.me/api/portraits/men/8.jpg",
      userId: 8464268426,
      timePosted: new Date('March 21, 2021'),
      typePost: "3",
      originalPost: "This is a post with the max length a post can have. It is a lot of characters, but there are people out there who like writing long texts, but I think I'm not one of them, I prefer short posts, you see. You can see all my old posts and you will notice none of them will reach the max character length of each post.But this isn't what I came to say. I want to say to you: \"If your car don't got a horn, and you don't like popcorn, don't worry, it doesn't matter. If your heart is very able, and the book is on the table, don't worry, it doesn't matter.\" If you know where did I got this from, I know you are a person of culture, as well. There aren't a lot of people who like a good piece of art in these days and I can say that I'm one of these restricted people who like it =)",
      quote: 'I fully agree with this all',
    },
    {
      userName: "Tauranga",
      profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
      userId: 4186453486,
      timePosted: new Date('March 15, 2022'),
      typePost: "1",
      originalPost: "I don't know where I need to go to get the new Pokemon",
      quote: null,
    },
    {
      userName: "Gabin",
      profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
      userId: 1672746848,
      timePosted: new Date('March 25, 2022'),
      typePost: "2",
      originalPost: "I don't know where I need to go to get the new Pokemon",
      quote: null,
    },
    {
      userName: "King Dunedin",
      profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
      userId: 8464268426,
      timePosted: new Date('March 18, 2022'),
      typePost: "3",
      originalPost: "I don't know where I need to go to get the new Pokemon",
      quote: 'I fully agree with this all',
    }
  ]

  res.json(posts)
}