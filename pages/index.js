import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Home from './Home';

export default function APP() {
  return (
    <div className="myTable">
      <div className="myTable-caption black">電台資訊</div>
      <div className="myTable-th">
        <div className="myTable-thc">電台圖片</div>
        <div className="myTable-thc">電台名稱</div>
        <div className="myTable-thc">電台敘述</div>
        <div className="myTable-thc">收聽網址</div>
      </div>
      <div className="myTable-tbody">
        <div className="myTable-tr">
          <div className="myTable-td">
            <img
              itemProp="image"
              id="radio-logo"
              src="https://cdn.webrad.io/images/logos/radios-tw/i-bcc-music-network.png"
              alt="中廣音樂網"
              height="66"
              importance="high"
              width="96"
            />
          </div>
          <div className="myTable-td">
            <div>中廣音樂網</div>
          </div>
          <div className="myTable-td">
            <div>我是敘述</div>
          </div>
          <div className="myTable-td">
            <div>https://example.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
