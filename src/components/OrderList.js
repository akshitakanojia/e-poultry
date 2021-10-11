import React, { useEffect, useState } from 'react'

import Dropdown from './Dropdown'
import emptyImg from '../images/undraw_empty_xct9.png'
import Pagination from './Pagination'

function OrderList({ orders }) {
	const [flag, setFlag] = useState(-1)
	const [displayOrders, setDisplayOrder] = useState(orders.sort((a, b) => a.id > b.id ? flag : (flag * -1)))
	const [current, setCurrent] = useState(1)
	const [max, setMax] = useState(1)
	const [search, setSearch] = useState("")
	const [searchResult, setSearchResult] = useState(null)

	const handleSearch = () => {
		setSearchResult(displayOrders.filter(order => {
			if (order.id.toString().includes(search)) {
				return order
			}
		}))
	}

	useEffect(() => {
		if (search === "")
			handleSearch()
	}, [search])


	const handleStatus = (val) => {
		if (val !== "All") {
			setDisplayOrder(orders.filter(o => o.status === val));
			setFlag(-1)
		}
		if (val === "All") {
			setDisplayOrder(orders.map(order => order))
			setFlag(-1)
		}
		setSearch("");
	}

	const handleSort = () => {
		setDisplayOrder(displayOrders.sort((a, b) => a.id > b.id ? flag : (flag * -1)));
		setFlag(flag * -1);
		setSearch("");
	}

	const handleMax = (val) => {
		setMax(val)
	}

	const handleCurrent = (val) => {
		setCurrent(val)
	}

	return (
		<>
			<div className="container" style={{ maxWidth: "100%" }}>
				<div className="row">
					<div className="col-lg-3 " >
						<div className="product_sidebar make-me-sticky">
							<ul>
								<li>
									<div className="filter-bar-heading"  >
										Showing <span>{current} of {max}</span> page
                            </div>
									<div className="clv_underline" style={{ paddingBottom: "10px" }}><img src="/images/footer_underline.png" alt="poultry-farming-service-underline" /></div>
								</li>
								<li>
									<div className="filter-bar-heading" onClick={handleSort} style={{ cursor: "pointer", paddingRight: '5px' }}> Order by date
                                    {flag === 1 ? <i className="fa fa-sort-amount-desc" style={{ paddingLeft: '10px' }} aria-hidden="true"></i>
											: <i className="fa fa-sort-amount-asc" style={{ paddingLeft: '10px' }} aria-hidden="true"></i>}
									</div>
									<div className="clv_underline" style={{ paddingBottom: "10px" }}><img src="/images/footer_underline.png" alt="poultry-farming-service-underline" /></div>
								</li>
								<li>
									<div className="filter-bar-heading" >Filter by status <Dropdown onSelectStatus={handleStatus} /> </div>
									<div className="clv_underline" style={{ paddingBottom: "10px" }}><img src="/images/footer_underline.png" alt="poultry-farming-service-underline" /></div>
								</li>
								<li>
									<div className="product_block">
										<div className="sidebar_search">
											<input type="text" placeholder="Search by Order Id" onChange={e => setSearch(e.target.value)} value={search} />
											<a href="javascript:;" onClick={handleSearch}><i className="fa fa-search" aria-hidden="true"></i></a>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-9 order-card-parent">
						{
							search !== "" ?
								searchResult && searchResult.length > 0 ?
									<Pagination orders={searchResult} onChangeMax={handleMax} onChangeCurrent={handleCurrent} />
									:
									<React.Fragment>
										<div>
											<div className="no_orders_text" >No such order found</div>
											<img src={emptyImg} className='no_orders_img' alt='No orders to show' />
										</div>
									</React.Fragment>
								: displayOrders.length > 0 ?
									<Pagination orders={displayOrders} onChangeMax={handleMax} onChangeCurrent={handleCurrent} />
									: <React.Fragment>
										<div>
											<div className="no_orders_text" >No such order found</div>
											<img src={emptyImg} className='no_orders_img' alt='No orders to show' />
										</div>
									</React.Fragment>
						}
					</div>
				</div>
			</div>
		</>
	)
}

export default OrderList