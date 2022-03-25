import { useState } from "react/cjs/react.development";
import { useCookies } from "react-cookie";

export default function NewPostBox({ onNewPost }) {
  const [cookies, setCookie] = useCookies(["today-posts"]);
  const maxLength = 777;
  const [charsLeft, setCharsLeft] = useState(maxLength);
  const [postContent, setPostContent] = useState('');
  const [error, setError] = useState(false);

  function resizeTextbox(e) {
    var that = e.target;

    that.style.height = "auto";
    that.style.height = (that.scrollHeight) + "px";

    setCharsLeft(maxLength - that.value.length);
    setPostContent(that.value);
  }

  function addPost(e) {
    e.preventDefault();

    if (cookies["today-posts"] >= 5) {
      setError(true);
      return;
    }

    var newPost = {
      userName: "Strider Dev",
      profilePic: "https://randomuser.me/api/portraits/women/35.jpg",
      userId: 1234567890,
      timePosted: new Date(),
      typePost: "1",
      originalPost: postContent,
      originalUser: null,
      originalTime: null,
      quote: null,
    }
    
    /* 
      The correct way is using the filter option of database, 
      but how I don't have one, I will use cookies 
    */

    var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1)

    setCookie("today-posts", 
      cookies["today-posts"] ? parseInt(cookies["today-posts"]) + 1 : 1, 
      {
        path: "/",
        expires: tomorrow
      }
    );

    onNewPost(newPost);
    setPostContent('');
  }

  return (
    <form className="_mvxs" onSubmit={addPost}>
      <div>
        <textarea
          type="text"
          maxLength={maxLength}
          className="_1/1 _bgsecondary _bdprimary _bdrs4 _pxxs _primary"
          placeholder="What do you wanna to share with the world?"
          style={{
            height: '55px',
            overflowY: 'hidden'
          }}
          value={postContent}
          onInput={resizeTextbox}
        />
        {
          error ? (
            <div className="_fz12 _red" style={{marginTop: '-2px'}}>You posted too many times today, please wait until tomorrow</div>
           ) : ''
        }
      </div>
      <div className="o-layout _mtxxs">
        <div className="o-layout__item _6/12">
          <button
            className="c-btn--primary c-btn--inverted _bd0 _bdrs4 _fz14 _phxs"
            style={{ paddingTop: '3px', paddingBottom: "3px" }}
            type="submit"
          > Post </button>
        </div>

        <div className="o-layout__item _6/12 _fz12 _tar _mtnxxs">
          {charsLeft} characteres left
        </div>
      </div>
    </form>
  )
}