import './index.scss';
export const CartFooter = ({ changeCheckAll,checkAll,totalPrice,totalCount}) => {
  return (
    <div className="cart-footer">
      <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" checked={checkAll} onChange={(e)=> changeCheckAll(e.target.checked)}  id="footerCheck"/>
        <label className="custom-control-label" htmlFor="footerCheck"> 全选</label>
      </div>
      <div>
        <span>合计:</span>
        <span className="price">¥ {totalPrice}</span>
      </div>
      <button type="button" className="footer-btn btn btn-primary">
              结算 ({ totalCount})
      </button>
    </div>
  );
};