/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Independent hooks
 */
import { useState, useEffect, useMemo } from 'react'

type FilterCallback<A extends unknown[], T> = [(...args: [Array<T>, ...A]) => Array<T>, A]

function useFilter<T>(values: Array<T>, filters: FilterCallback<Array<any>, T>[], dependencies: Array<any>) {
  const [_values, setValues] = useState<Array<T>>(values)

  const resultState = useMemo<Array<T>>(() => {
    let _cloned = [..._values]

    filters.map(([filterCallback, args]) => {
      _cloned = filterCallback(_cloned, ...args)
      return
    })

    return _cloned
  }, [_values, filters, ...dependencies])

  useEffect(() => {
    // Initial setup
    setValues(values)
  }, [values])

  return [resultState, setValues] as [T[], React.Dispatch<React.SetStateAction<T[]>>]
}

export default useFilter
