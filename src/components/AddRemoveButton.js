import React from 'react'
import { removeItem, addItem } from '../redux/cart/cart.actions'
import { connect } from 'react-redux';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function AddRemoveButton({ item, quantity, addItem, removeItem }) {
	const toastId = React.useRef(null);
	const { name, max_order_qty } = item
	const notifyLimit = (limit, product) => {
		if (!toast.isActive(toastId.current)) {
			toastId.current = toast(`You can buy upto ${limit} Kgs of ${product} in single order.`, { position: toast.POSITION.BOTTOM_CENTER });
		}
	}

	return (
		<div className="fd_pro_quantity" style={{ textAlign: "center" }}>
			<div className="quantity_wrapper">
				<div className="input-group">
					<span className="quantity_minus" onClick={() => removeItem(item)}> - </span>
					<input type="text" className="quantity" value={`${quantity} Kg`} />
					{
						max_order_qty !== null ?
							quantity < max_order_qty ?
								<span className="quantity_plus" onClick={() => addItem(item)}>+</span>
								: <span className="quantity_plus" onClick={() => notifyLimit(max_order_qty, name)} style={{ color: "#efffb5" }}>+</span>
							: <span className="quantity_plus" onClick={() => addItem(item)}>+</span>
					}
				</div>
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	removeItem: item => dispatch(removeItem(item)),
	addItem: item => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(AddRemoveButton)