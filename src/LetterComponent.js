import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

const LetterComponent = ({ countdownFinished }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (countdownFinished) {
      setShowContent(true);
    }
  }, [countdownFinished]);

  const containerStyle = {
    position: 'relative',
    zIndex: 1000,
    backgroundColor: '#F4F4F4',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    border: '7px solid black',
    height: '300px',
    width: '700px',
    minWidth: '300px',
    maxWidth: '80%',
  };

  const contentStyle = {
    /* Add any additional styles for the content */
  };

  return (
    <div style={containerStyle}>
      {showContent && (
        <div style={contentStyle}>
          <h1>妞破壳万岁!</h1>
          <TypeAnimation
            sequence={[
              '哈喽哈朱小哟，',
              1000,
              '这是我们一起度过的第二个妞妞节。祝朱晨昕小妞在新的一年了快快乐乐，健健康康，平平安安，顺顺利利，吉吉祥祥，开开心心，红红火火，甜甜蜜蜜，可可爱爱，美美丽丽！',
              2000,
              '嘿嘿，如果你还想听更多我还有！',
              2000,
              '大大小小，左左右右，上上下下，南南北北，前前后后，里里外外，日日夜夜，长长短短，点点滴滴，言言行行，客客气气，圈圈点点，朝朝暮暮，战战兢兢，兢兢业业，安安稳稳，世世代代，原原本本，浩浩荡荡，支支吾吾，生生世世，形形色色，心心念念，堂堂正正，唯唯否否，郁郁葱葱，喜喜欢欢，轰轰烈烈，和和美美，来来往往，分分秒秒，拉拉扯扯，服服帖帖，年年岁岁，岁岁年年',
              2000,
              '我的体育老师已经说内行哩',
              2000,
              '不过回到正题上',
              2000,
              '感谢22岁的妞妞给Enoch的爱与包容，过去一年有很多开心的时刻和妞妞在一起',
              2000,
              '在感情中也有一些时刻，Enoch没有做好头号妞粉的职责，Enoch表示抱歉',
              2000,
              '但Enoch也会跟妞妞一样成长，认识到自己的问题，迭代更新！',
              2000,
              '虽然偶尔也会因为一些小事而吵吵闹闹，',
              2000,
              '但那只是因为我们太甜蜜了，所以才会如此黏糊糊',
              2000,
              '不过，请相信Enoch一定会努力改正，变成一个更棒的男朋友！',
              2000,
              '妞妞，我们一起努力，让未来的日子更加美好！',
              2000,
              '在你的破壳日跟你说',
              2000,
              '祝你，百事可乐，万事芬达，心情雪碧，一周七喜。',
              2000,
              '爱你的Enoch',
              1000,
              '哈喽哈朱小哟，',
            ]}
            wrapper="p"
            cursor={true}
            speed={40}
            style={{ fontSize: '1.25em' }}
            repeat={Infinity}
          />
        </div>
      )}
    </div>
  );
};

export default LetterComponent;