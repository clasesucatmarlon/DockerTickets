// eslint-disable-next-line react/prop-types
const Label = ({contentLabel}) => {
    return (
        <label
            htmlFor='name'
            className='absolute -top-2 left-2 px-4 font-bold text-xs bg-gray-100'
        >
            {contentLabel}
        </label>
    )
}

export default Label;