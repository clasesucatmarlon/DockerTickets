
// eslint-disable-next-line react/prop-types
const Input = ({idInput, contentPlaceholder, contentValue, funcChange}) => {
    return (
        <>
            <input
                id={idInput}
                type='text'
                className='w-full border border-gray-500/30 bg-transparent py-3 px-5 rounded-full outline-none placeholder:text-gray-400'
                placeholder={contentPlaceholder}
                autoComplete='off'
                value={contentValue}
                onChange={(e) => funcChange(e.target.value)}
            />
        </>
    )
}

export default Input;