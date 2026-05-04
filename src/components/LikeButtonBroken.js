function LikeButtonBroken() {
  let count = 0;

  function handleClick() {
    count = count + 1;
    console.log('count is now:', count);
  }

  return (
    <button className="like-button broken" onClick={handleClick}>
      Likes: {count}
    </button>
  );
}

export default LikeButtonBroken;
