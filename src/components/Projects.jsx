import{ useState, useEffect } from 'react';
import './projects.css';

const Projects = () => {
  const [backgroundColor, setBackgroundColor] = useState(localStorage.getItem('backgroundColor'));
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  const colorCodeLt = 'abcdefABCDEF';
  const colorCodeNm = '0123456789';

  const startChangeColor = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        let colorCode = '#';
        for (let i = 0; i < 3; i++) {
          colorCode += colorCodeNm[Math.floor(Math.random() * 10)];
          colorCode += colorCodeLt[Math.floor(Math.random() * 10)];
        }
        localStorage.setItem('backgroundColor', colorCode);
        setBackgroundColor(colorCode);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopChangeColor = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <div className="container">
      <h1>Unlimited Colors</h1>
      <div className="wrapper">
        <button className="btn" onClick={startChangeColor}>
          Start
        </button>
        <button className="btn" onClick={stopChangeColor}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default Projects;
