import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/CounterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'

export const Counter = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const incrementEventHandler = () => dispatch(counterActions.increment())
  const decrementEventHandler = () => dispatch(counterActions.decrement())

  return (
    <div>
      <button onClick={incrementEventHandler} data-testid="btn-increment">{t('Инкремент')}</button>
      <button onClick={decrementEventHandler} data-testid="btn-decrement">{t('Декремент')}</button>
      <div data-testid="counter-value">{counterValue}</div>
    </div>
  )
}
