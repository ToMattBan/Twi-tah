import Image from "next/image"
import Modal from "react-modal";
import { useState } from "react";
import { useCookies } from "react-cookie";
import repostIcon from "../public/repost.svg"
import quoteIcon from "../public/quote.svg"

const modalStyle = {
  content: {
    transform: 'translateY(-50%)',
    top: '50%',
    height: 'fit-content'
  }
}
Modal.setAppElement('#__next');

export default function ReactionBox({ originalPost, originalUser, originalTime, onNewReaction }) {
  const [cookies, setCookie] = useCookies(["today-posts"]);
  const [modalOpen, setModalOpen] = useState(false);
  const [postType, setPostType] = useState("2");
  const [error, setError] = useState(false);
  
  const maxLength = 777;
  const [quote, setQuote] = useState('');


  function resizeTextbox(e) {
    var that = e.target;

    that.style.height = "auto";
    that.style.height = (that.scrollHeight) + "px";

    setQuote(that.value);
  }

  function openConfirmModal(type) {
    setError(false);

    if (type == 'repost') setPostType('2')
    if (type == "quote") setPostType('3')

    setModalOpen(true);
  }

  function addPost() {
    if (cookies["today-posts"] >= 5) {
      setError(true);
      return;
    }

    setModalOpen(false)

    var newPost = {
      userName: "Strider Dev",
      profilePic: "https://randomuser.me/api/portraits/women/35.jpg",
      userId: 1234567890,
      timePosted: new Date(),
      typePost: postType,
      originalPost: originalPost,
      originalUser: originalUser,
      originalTime: originalTime,
      quote: quote ? quote : null,
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
    
    onNewReaction(newPost);
    setQuote('');
  }

  return (
    <div className="o-layout__item _df _jcsa _mtxs">
      <Image src={repostIcon} width="100%" className="_cp" onClick={() => openConfirmModal('repost')} alt="repostIcon"/>
      <Image src={quoteIcon} width="100%" className="_cp" onClick={() => openConfirmModal('quote')} alt="quoteIcon"/>

      <Modal isOpen={modalOpen} onRequestClose={() => { setModalOpen(false) }} style={modalStyle}>
        {
          postType == '2' ? (
            <div className="_tac">
              <span className="_fz20">Repost that Twi'tah?</span>
              <div className="_df _jcsa _mtsm">
                <button
                  className="c-btn--primary c-btn--inverted _bd0 _bdrs4 _fz14 _phxs"
                  style={{ paddingTop: '3px', paddingBottom: "3px" }}
                  onClick={addPost}> REPOST </button>
                <button
                  className="c-btn--primary c-btn--inverted _bd0 _bdrs4 _fz14 _phxs"
                  style={{ paddingTop: '3px', paddingBottom: "3px" }}
                  onClick={() => { setModalOpen(false) }}> CANCEL </button>
              </div>
              {
                error ? (
                  <div className="_fz12 _red _mtxs" style={{ marginTop: '-2px' }}>You posted too many times today, please wait until tomorrow</div>
                ) : ''
              }
            </div>
          ) : (
            <div className="_tac">
              <span className="_fz20">Quote that Twi'tah?</span>

              <textarea
                type="text"
                maxLength={maxLength}
                className="_1/1 _bgsecondary _bdprimary _bdrs4 _pxxs _primary _mvsm"
                placeholder="What do you think about that post?"
                style={{
                  height: '55px',
                  overflowY: 'hidden'
                }}
                value={quote}
                onInput={resizeTextbox}
              />

              <div className="_df _jcsa">
                <button
                  className="c-btn--primary c-btn--inverted _bd0 _bdrs4 _fz14 _phxs"
                  style={{ paddingTop: '3px', paddingBottom: "3px" }}
                  onClick={addPost}> QUOTE </button>
                <button
                  className="c-btn--primary c-btn--inverted _bd0 _bdrs4 _fz14 _phxs"
                  style={{ paddingTop: '3px', paddingBottom: "3px" }}
                  onClick={() => { setModalOpen(false) }}> CANCEL </button>
              </div>
              {
                error ? (
                  <div className="_fz12 _red _mtxs" style={{ marginTop: '-2px' }}>You posted too many times today, please wait until tomorrow</div>
                ) : ''
              }
            </div>
          )
        }
      </Modal>
    </div>
  )
}