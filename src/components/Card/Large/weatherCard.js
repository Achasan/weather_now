function WeatherCard() {
  return (
    <div className="weatherCard">
      <div className="current-image">
        <div className="text-block">
          <span className="temperature">4°</span>
          <span className="sky-status">맑음</span>
        </div>
      </div>

      <table className="current-table">
        <tbody>
          <tr>
            <td>
              <dl>
                <dt>강수형태</dt>
                <dd>없음</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>습도</dt>
                <dd>22%</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>1시간 강수량</dt>
                <dd>0mm</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>기온</dt>
                <dd>7℃</dd>
              </dl>
            </td>
          </tr>

          <tr>
            <td>
              <dl>
                <dt>풍속(동서)</dt>
                <dd>0.1m/s</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>풍속(남북)</dt>
                <dd>-1m/s</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>풍향</dt>
                <dd>북서-북</dd>
              </dl>
            </td>
            <td>
              <dl>
                <dt>풍속</dt>
                <dd>1.1m/s</dd>
              </dl>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WeatherCard;
