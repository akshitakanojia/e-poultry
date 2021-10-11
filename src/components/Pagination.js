import React, { useEffect, useState } from "react";

import OrderCard from "./OrderCard";
import usePagination from "./usePagination";

function Pagination({orders,onChangeCurrent,onChangeMax}){
  const maxItem = 2;
  const maxPageList = 4;
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
  const { next, prev, jump, currentData, currentPage, maxPage, setData, setCurrentPage } = usePagination(orders, maxItem)
  const [pageList, setPageList] = useState(range(1, Math.min(5,maxPage), 1))
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(Math.min(5, maxPage));

  useEffect(() => {
    setData(orders);
    setCurrentPage(1);
    setPageList(range(1, Math.min(5,(Math.ceil(orders.length / maxItem))), 1))
  }, [orders])


  const changeCurrent = (val) => onChangeCurrent(val)
  const changeMax = (val) => onChangeMax(val)

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };
  
  useEffect(()=>{
    changeCurrent(currentPage);
    scrollToTop();
  },[currentPage])

  useEffect(()=>{
    changeMax(maxPage)
  },[maxPage])

  const prevHandler = () => {
    prev();
    if (currentPage === start) {
      var tempStart = currentPage - 1;
      var tempEnd = currentPage - 1 + maxPageList;
      if (tempStart >= 1 && tempEnd <= maxPageList) {
        setStart(tempStart);
        setEnd(tempEnd);
        setPageList(range(tempStart, tempEnd, 1));
      }
    }
  }

  const nextHandler = () => {
    next();
    if (currentPage === end) {
      var tempStart = currentPage + 1 - maxPageList;
      var tempEnd = currentPage + 1;
      if (tempStart >= 1 && tempEnd <= maxPageList) {
        setStart(tempStart);
        setEnd(tempEnd);
        setPageList(range(tempStart, tempEnd, 1));
      }
    }
  }

  return(
    <>
      {
        currentData().map(order => <OrderCard key={order.id} order={order} />)
      }
      {
        pageList.length > 1 &&

        <div className="blog_pagination_section" style={{ textAlign: "center" }}>

          <ul>
            <li className="blog_page_arrow" onClick={() => prevHandler()} style={{ display: `${currentPage === 1 ? "none" : "inline-block"}` }}>
              <a href="javascript:;">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="10px" height="15px">
                  <path fillRule="evenodd" fill="rgb(112, 112, 112)" d="M0.324,8.222 L7.117,14.685 C7.549,15.097 8.249,15.097 8.681,14.685 C9.113,14.273 9.113,13.608 8.681,13.197 L2.670,7.478 L8.681,1.760 C9.113,1.348 9.113,0.682 8.681,0.270 C8.249,-0.139 7.548,-0.139 7.116,0.270 L0.323,6.735 C0.107,6.940 -0.000,7.209 -0.000,7.478 C-0.000,7.747 0.108,8.017 0.324,8.222 Z"></path>
                </svg>
                <span>prev</span>
              </a>
            </li>
            {
              pageList.map(page => <li key={page} ><a href="javascript:;" className={`${currentPage === page && "pagination-active"}`} onClick={() => jump(page)}>{page}</a></li>)
            }
            <li className="blog_page_arrow" onClick={() => nextHandler()} style={{ display: `${currentPage === maxPage ? "none" : "inline-block"}` }}>
              <a href="javascript:;">
                <span>next</span>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="19px" height="25px">
                  <path fillRule="evenodd" fill="rgb(112, 112, 112)" d="M13.676,13.222 L6.883,19.685 C6.451,20.097 5.751,20.097 5.319,19.685 C4.887,19.273 4.887,18.608 5.319,18.197 L11.329,12.478 L5.319,6.760 C4.887,6.348 4.887,5.682 5.319,5.270 C5.751,4.861 6.451,4.861 6.884,5.270 L13.676,11.735 C13.892,11.940 14.000,12.209 14.000,12.478 C14.000,12.747 13.892,13.017 13.676,13.222 Z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        }
    </>
  )
}

export default Pagination