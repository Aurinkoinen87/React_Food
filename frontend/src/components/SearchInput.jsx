import React, { useState, useRef, useCallback } from 'react';
import SvgSelector from "./SvgSelector"
import { useSelector, useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'
import { setInput, setCategory, dataSelector } from '../redux/slices/dataSlice.js'




export function SearchInput() {

  const dispatch = useDispatch()
  let { category } = useSelector(dataSelector)
  let[value, setValue] = useState('')

  const debouncer = useCallback(   
    debounce((str)=> {
      dispatch(setInput(str))
    }, 1000),[]) 

  const onChangeHandler = (e) => {
    let input = e.currentTarget.value
    setValue(input)
    if(category !== 0) dispatch(setCategory(0))     
    debouncer(input)
  }


  const clearInput = () => {
    setValue('')
    dispatch(setInput(''))
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
