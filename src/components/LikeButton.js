import { useState } from 'react';

function LikeButton() {
  const [count, setCount] = useState(0);
  console.log('count is now:', count);

  return (
    <button className="like-button" onClick={() => setCount(count + 1)}>
      Likes: {count}
    </button>
  );
}

export default LikeButton;
