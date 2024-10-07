import { useForm } from '../Hooks/useForm'
import { useEffect, useRef } from "react"

export const FormularioComponente = () => {

    const focusRef = useRef()
    console.log(focusRef)

    const initialForm = {
        userName:'',
        email: '',
        password: ''
    }

    const { formState, userName, email, password, onInputChange } = useForm(initialForm)
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

    useEffect(()=>{
        focusRef.current.focus()
    },[])

  return (
    <form onSubmit={onSubmit}>
        <div className='form-group'>
            <label htmlFor='userName'>UserName</label>
            <input
                type='text'
                className='form-control'
                name='userName'
                placeholder='Enter your Username'
                value={userName}
                onChange={onInputChange}
            ></input>
        </div>
        <div className='form-group'>
            <label htmlFor='email'>Email Adress</label>
            <input
                ref={focusRef}
                type='text'
                className='form-control'
                name='email'
                placeholder='Enter mail'
                value={email}
                onChange={onInputChange}
            ></input>
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
                type='password'
                className='form-control'
                name='password'
                placeholder='Enter password'
                value={password}
                onChange={onInputChange}
            ></input>
            <button type='submit' className='btn btn-primary'>
                Submit
            </button>
        </div>
    </form>
  )
}
    </form>
  )
}
