
import './Wrapper.scss'
function Wrapper({children}) {
  console.log({children});
  return (
    <div className="calc"> {children}</div>
  )
}

export default Wrapper;