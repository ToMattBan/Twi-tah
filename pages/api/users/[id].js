export default async (req, res) => {
  const { id } = req.query;
  var userData = '';

  if (id == '1234567890') {
    userData = {
      userName: "Strider Dev",
      profilePic: "https://randomuser.me/api/portraits/women/35.jpg",
      dateJoined: new Date('March 12, 2022'),
      areFollowing: true,
      numFollowers: 0,
      numFollowing: 3,
      numPosts: 1,
      posts: [
        {
          userName: "Strider Dev",
          profilePic: "https://randomuser.me/api/portraits/women/35.jpg",
          userId: 1234567890,
          timePosted: new Date('March 15, 2022'),
          typePost: "1",
          originalPost: "My first post on twi'tah",
          originalUser: null,
          originalTime: null,
          quote: null,
        },
      ]
    }
  }

  if (id == '4186453486') {
    userData = {
      userName: "Tauranga",
      profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
      dateJoined: new Date('March 12, 2022'),
      areFollowing: true,
      numFollowers: 15,
      numFollowing: 38,
      numPosts: 9,
      posts: [
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
          timePosted: new Date('March 18, 2022'),
          typePost: "3",
          originalPost: "I don't know where I need to go to get the new Pokemon",
          originalUser: 'Tauranga',
          originalTime: new Date('March 15, 2022'),
          quote: 'Reposting to you all see',
        },
        {
          userName: "Tauranga",
          profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
          userId: 4186453486,
          timePosted: new Date('March 18, 2022'),
          typePost: "3",
          originalPost: "I don't know where I need to go to get the new Pokemon",
          originalUser: 'Tauranga',
          originalTime: new Date('March 15, 2022'),
          quote: null,
        },
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
          timePosted: new Date('March 18, 2022'),
          typePost: "3",
          originalPost: "I don't know where I need to go to get the new Pokemon",
          originalUser: 'Tauranga',
          originalTime: new Date('March 15, 2022'),
          quote: 'Reposting to you all see',
        },
        {
          userName: "Tauranga",
          profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
          userId: 4186453486,
          timePosted: new Date('March 18, 2022'),
          typePost: "3",
          originalPost: "I don't know where I need to go to get the new Pokemon",
          originalUser: 'Tauranga',
          originalTime: new Date('March 15, 2022'),
          quote: null,
        },
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
          timePosted: new Date('March 18, 2022'),
          typePost: "3",
          originalPost: "I don't know where I need to go to get the new Pokemon",
          originalUser: 'Tauranga',
          originalTime: new Date('March 15, 2022'),
          quote: 'Reposting to you all see',
        },
        {
          userName: "Tauranga",
          profilePic: "https://randomuser.me/api/portraits/women/18.jpg",
          userId: 4186453486,
          timePosted: new Date('March 18, 2022'),
          typePost: "3",
          originalPost: "I don't know where I need to go to get the new Pokemon",
          originalUser: 'Tauranga',
          originalTime: new Date('March 15, 2022'),
          quote: null,
        },
      ]
    }
  }

  if (id == '1672746848') {
    userData = {
      userName: "Gabin",
      profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
      dateJoined: new Date('March 12, 2022'),
      areFollowing: false,
      numFollowers: 35,
      numFollowing: 12,
      numPosts: 6,
      posts: [
        {
          userName: "Gabin",
          profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
          userId: 1672746848,
          timePosted: new Date('March 15, 2022'),
          typePost: "1",
          originalPost: "I don't know where I need to go to get the new Pokemon",
          originalUser: null,
          originalTime: null,
          quote: null,
        },
        {
          userName: "Gabin",
          profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
          userId: 1672746848,
          timePosted: new Date('March 18, 2022'),
          typePost: "3",
          originalPost: "I don't know where I need to go to get the new Pokemon",
          originalUser: 'Gabin',
          originalTime: new Date('March 15, 2022'),
          quote: 'Reposting to you all see',
        },
        {
          userName: "Gabin",
          profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
          userId: 1672746848,
          timePosted: new Date('March 18, 2022'),
          typePost: "3",
          originalPost: "I don't know where I need to go to get the new Pokemon",
          originalUser: 'Gabin',
          originalTime: new Date('March 15, 2022'),
          quote: null,
        },
        {
          userName: "Gabin",
          profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
          userId: 1672746848,
          timePosted: new Date('March 15, 2022'),
          typePost: "1",
          originalPost: "I don't know where I need to go to get the new Pokemon",
          originalUser: null,
          originalTime: null,
          quote: null,
        },
        {
          userName: "Gabin",
          profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
          userId: 1672746848,
          timePosted: new Date('March 18, 2022'),
          typePost: "3",
          originalPost: "I don't know where I need to go to get the new Pokemon",
          originalUser: 'Gabin',
          originalTime: new Date('March 15, 2022'),
          quote: 'Reposting to you all see',
        },
        {
          userName: "Gabin",
          profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
          userId: 1672746848,
          timePosted: new Date('March 18, 2022'),
          typePost: "3",
          originalPost: "I don't know where I need to go to get the new Pokemon",
          originalUser: 'Gabin',
          originalTime: new Date('March 15, 2022'),
          quote: null,
        },
      ]
    }
  }

  if (id == '8464268426') {
    userData = {
      userName: "King Dunedin",
      profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
      dateJoined: new Date('March 12, 2022'),
      areFollowing: false,
      numFollowers: 152,
      numFollowing: 102,
      numPosts: 3,
      posts: [
        {
          userName: "King Dunedin",
          profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
          userId: 8464268426,
          timePosted: new Date('March 15, 2022'),
          typePost: "1",
          originalPost: "I don't know where I need to go to get the new Pokemon",
          originalUser: null,
          originalTime: null,
          quote: null,
        },
        {
          userName: "King Dunedin",
          profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
          userId: 8464268426,
          timePosted: new Date('March 18, 2022'),
          typePost: "3",
          originalPost: "I don't know where I need to go to get the new Pokemon",
          originalUser: 'King Dunedin',
          originalTime: new Date('March 15, 2022'),
          quote: 'Reposting to you all see',
        },
        {
          userName: "King Dunedin",
          profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
          userId: 8464268426,
          timePosted: new Date('March 18, 2022'),
          typePost: "3",
          originalPost: "I don't know where I need to go to get the new Pokemon",
          originalUser: 'King Dunedin',
          originalTime: new Date('March 15, 2022'),
          quote: null,
        }
      ]
    }
  }

  res.json(userData)
}