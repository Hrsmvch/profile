const mediaQueryMobile = '@media (max-width: 767px)';

const customStyles = {
  container: (provided) => ({
    ...provided }), 
  control: (provided, state) => ({
    ...provided,
    background: 'transparent',
    border: '1px solid #858585',
    fontSize: '14px', 
    borderRadius: '6px',
    boxShadow: 'none',
    cursor: 'pointer', 
  }),
  option: (provided, state) => ({
    ...provided, 
    backgroundColor: state.isFocused ? '#8c8888' : "#EEE9E4",
    color: state.isFocused ? '#fff' : '#1E1E1E',
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: '38px',
    // padding: '0 8px',  
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: '38px', 
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#1E1E1E',
    opacity: "0.5",
    marginRight: '6px'
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#1E1E1E',  
    height: '20px',
    
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: '5px',
    borderRadius: '8px',
    overflow: 'hidden',
    zIndex: '999',
    background: '#EEE9E4',
  }),  
  // placeholder: (provided) => ({
  //   ...provided,
  //   height: '30px',
  // }),
};



export default customStyles;