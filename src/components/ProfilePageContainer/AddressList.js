import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectFetchAddress } from '../../redux/address/address.selectors'
import AddAddressCard from './AddAddressCard'
import AddressCard from './AddressCard'

function AddressList({addresses,selectedId}){
  const [selected, setSelected] = useState(null)
  const handleAddressId = (id) => {
    setSelected(id)
  }
  
  useEffect(()=>{
    selectedId(selected)
  },[selected])
  return(
    <>
    {
      addresses.loading?
      <div className="otp_loading">
													<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: "auto", background: "#fff", display: "block" }} width="57px" height="57px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
														<path d="M10 50A40 40 0 0 0 90 50A40 44.4 0 0 1 10 50" fill="#9dc709" stroke="none">
															<animateTransform attributeName="transform" type="rotate" dur="0.6622516556291391s" repeatCount="indefinite" keyTimes="0;1" values="0 50 52.2;360 50 52.2"></animateTransform>
														</path>
													</svg>
												</div>
      :addresses.error?
      <h5>Error Fetching Address</h5>
      :addresses.success.length>0?
      <>
        {
          addresses.success.map(address =>
            <AddressCard key={address.id} address={address} selectedId={handleAddressId} selected={selected} />
          )
        }
        <AddAddressCard/>
      </>
      :<AddAddressCard/>
    }
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  addresses : selectFetchAddress
})

export default connect(mapStateToProps)(AddressList)

// class SelectableCardList extends React.Component {

//   constructor(props) {
//     super(props);
//     var selected = props.multiple ? [] : -1;
//     var initialState = {
//       selected: selected
//     };
//     this.state = initialState;
//   }

//   onItemSelected(index) {
//     this.setState((prevState, props) => {
//       if (props.multiple) {
//         var selectedIndexes = prevState.selected;
//         var selectedIndex = selectedIndexes.indexOf(index);
//         if (selectedIndex > -1) {
//           selectedIndexes.splice(selectedIndex, 1);
//           props.onChange(selectedIndexes);
//         } else {
//           if (!(selectedIndexes.length >= props.maxSelectable)) {
//             selectedIndexes.push(index);
//             props.onChange(selectedIndexes);
//           }
//         }
//         return {
//           selected: selectedIndexes
//         };
//       } else {
//         props.onChange(index);
//         return {
//           selected: index
//         }
//       }
//     });
//   }

//   render() {
//     var {
//       contents,
//       multiple
//     } = this.props;

//     var content = contents.map((cardContent,i) => {
//       var{ 
//         title,
//         description,
//         selected
//       } = cardContent;
//       var selected = multiple ? this.state.selected.indexOf(i) > -1 : this.state.selected == i;
//       return (
//         <SelectableTitleCard key={i} 
//           title={title} description={description}
//           selected={selected} 
//           onClick={(e) => this.onItemSelected(i)} />
//       );
//     });
//     return (<div className="cardlist">{content}</div>);
//   }
// }