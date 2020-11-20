import React, { useState, useEffect } from 'react';

function Post() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
        document.title = `You clicked ${count} times`;
    });

    const [data, setData] = useState({'posts': []});
    useEffect(() => {
        fetch('/posts')
        .then(res => res.json())
        .then(data => {
            console.log(data.posts)
            console.log(data.posts[0].title + " " + data.posts[0].content)
            setData(data);
        })
    }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p> posts </p>
    </div>
  );
}


export default Post;
