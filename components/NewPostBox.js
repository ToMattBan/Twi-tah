import { useEffect, useState } from "react/cjs/react.development";

export default function NewPostBox({onNewPost}) {
  const maxLength = 777;
  const [charsLeft, setCharsLeft] = useState(maxLength);
  const [postContent, setPostContent] = useState('');

  function resizeTextbox(e) {
    var that = e.target;

    that.style.height = "auto";
    that.style.height = (that.scrollHeight) + "px";

    setCharsLeft(maxLength - that.value.length);
    setPostContent(that.value);
  }

  function addPost(e) {
    e.preventDefault();

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

    onNewPost(newPost);
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
          onInput={resizeTextbox}
        />
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