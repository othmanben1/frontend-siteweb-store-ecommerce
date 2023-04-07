
const Content = (props) => {
  
  document.title = 'Soteb Computer -' + props.title
  return (
    <div className="w-100">{props.children}</div>
  )
}

export default Content;
