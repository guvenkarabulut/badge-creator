import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";

const Deneme = () => {
  const [emoji, setEmoji] = useState("");
  const [emojiBase64, setEmojiBase64] = useState("");
  const onEmojiClickHandler = (event, emojiObject) => {
    try {
      setEmoji(emojiObject.target.currentSrc);
      // fetch emojiUrl and convert to base64
      fetch(emojiObject.target.currentSrc)
        .then((response) => response.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            setEmojiBase64(reader.result);
          };
          reader.readAsDataURL(blob);
        });
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div>
      <EmojiPicker onEmojiClick={onEmojiClickHandler} />
      <img src={emoji} alt="emoji" />
      <p className="text-2xl">
        {emoji.split("/").slice(-1)[0].split(".")[0].replace(/-/g, " ")}
        <br></br>
        {emojiBase64}
        <img
          src={`https://img.shields.io/badge/sea-ase-000000.svg?style=for-the-badge&logo=${emojiBase64}`}
          alt="emoji"
        />
      </p>
    </div>
  );
};

export default Deneme;
