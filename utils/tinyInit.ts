const tinyInit = {
  min_height: 500,
  height: 500,
  menubar: true,
  paste_as_text: true,
  placeholder: "Here we place the content", 
  plugins: [ "lists", "link", "image", 'underline', 'code', 'codesample' ],
  toolbar: 
    "forecolor | " +
    "bold italic underline removeformat blockquote | link image | code | alignleft aligncenter " +
    "alignright alignjustify | bullist numlist "  
};

export default tinyInit;

