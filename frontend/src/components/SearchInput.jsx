import { Context } from '../App'
import React, { useContext } from 'react';
import { SvgSelector } from "./SvgSelector"
import { useSelector, useDispatch } from 'react-redux'
import { setInputValue } from '../redux/slices/filterSlice'



export function SearchInput() {

  let{ findPizza, initData, selectCategory, setData } = useContext(Context)
  const dispatch = useDispatch()
  const { category, inputValue } = useSelector((state)=> state.filtration)


  const onChangeHandler = (e) => {
    dispatch(setInputValue(e.currentTarget.value))
    findPizza(e.currentTarget.value)
  }
  const clearInput = () => {
    dispatch(setInputValue(''))
    setData(initData)
    selectCategory(category)
  }
  return (
    <>
    { window.location.pathname == '/' &&
    <div class="search">
    <SvgSelector name={'search'} />
    <input class="search__input" type="text" placeholder="find your pizza..." value={inputValue} onChange={(e)=> onChangeHandler(e)}/>
    {inputValue && <span onClick={clearInput}><SvgSelector name={'clear-input'} /></span>}
    </div>
    }
    </>
  )
}
