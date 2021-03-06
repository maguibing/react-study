import './index.scss';
export const GoodsItem = ({goods_img,goods_price,goods_name,goods_count,goods_state,changeGoodsState,id }) => {
  return (
    // 暂时完成列表渲染  json-server data tab --port 8888
    <div className="cart-goods-item">
      <div className="left">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" checked={goods_state} onChange={(e) => changeGoodsState(id, e.target.checked)} className="custom-control-input" id={`input${id}`} />
            <label className="custom-control-label" htmlFor={ `input${id}`}><img src={goods_img} alt="" /></label>
        </div>
      </div>
      <div className="right">
        <div className="top">{goods_name}</div>
        <div className="bottom">
          <span className="price">¥ {goods_price}</span>
          <span>{goods_count}</span>
        </div>
      </div>
    </div>
  );
};