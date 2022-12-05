export default function Home() {
  return (
    <div>
      <div itemScope itemType="https://schema.org/RadioStation">
        <meta itemProp="url" content="https://radios.tw/i-bcc-music-network/" />
        <h3>電台資訊：</h3>
        <table>
          <thead>
            <tr>
              <th colSpan="4">電台資訊</th>
            </tr>
            <th>電台圖片</th>
            <th>電台名稱</th>
            <th>電台敘述</th>
            <th>收聽網址</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  itemProp="image"
                  id="radio-logo"
                  src="https://cdn.webrad.io/images/logos/radios-tw/i-bcc-music-network.png"
                  alt="中廣音樂網"
                  height="66"
                  importance="high"
                  width="96"
                />
              </td>
              <td>
                <span itemProp="name">中廣音樂網</span>
              </td>
              <td>
                <span itemProp="description">我是描述</span>
              </td>
              <td>
                <span itemProp="url">
                  https://radios.tw/i-bcc-music-network/
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
