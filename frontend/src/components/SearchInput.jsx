import { Context } from '../App'
import React, { useState, useContext, useRef, useCallback } from 'react';
import SvgSelector from "./SvgSelector"
import { useSelector, useDispatch } from 'react-redux'
import { setInputValue } from '../redux/slices/filterSlice'
import debounce from 'lodash.debounce'



export function SearchInput() {

  let{ initData, selectCategory, setData } = useContext(Context)
  const dispatch = useDispatch()
  const { category } = useSelector((state)=> state.filtration)

  let[value, setValue] = useState('')

  const debouncer = useCallback(
    debounce((str)=> {
      dispatch(setInputValue(str))
    }, 1000),[]) 

  const onChangeHandler = (e) => {
    let input = e.currentTarget.value
    setValue(input)
    debouncer(input)
  }


  const clearInput = () => {
    setValue('')
    dispatch(setInputValue(''))
    setData(initData)
    selectCategory(category)
    inputRef.current.focus()
  }

  let inputRef = useRef()

  return (
    <>
    { window.location.pathname == '/' &&
    <div class="search">
    <SvgSelector name={'search'} />
    <input class="search__input" type="text" placeholder="find your pizza..." value={value} onChange={(e)=> onChangeHandler(e)} ref={inputRef} />
    {value && <span onClick={clearInput}><SvgSelector name={'clear-input'} /></span>}
    </div>
    }
    </>
  )
}
