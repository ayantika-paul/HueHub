function Container({children, minHeight="", minWidth=""}) {
  return (
    <div className='container d-flex text-center gap-3 justify-content-center align-items-center' style={{minHeight:minHeight, minWidth:minWidth}}>{children}</div>
  )
}

export default Container