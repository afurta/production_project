import './Loader.scss'

/**
 * @deprecated
 */
export const Loader = () => {
  return (
    <div className="lds-ellipsis" data-testid="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
