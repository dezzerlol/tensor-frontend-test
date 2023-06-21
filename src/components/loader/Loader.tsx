export const Loader = () => {
  return (
    <div id='loading-spinner'>
      <svg
        width={`30px`}
        height={`30px`}
        viewBox='0 0 38 38'
        xmlns='http://www.w3.org/2000/svg'
        stroke={'#8bcce7'}
        role='presentation'>
        <g fill='none' fillRule='evenodd'>
          <g transform='translate(2.5 2.5)' strokeWidth='5'>
            <circle strokeOpacity='.5' cx='16' cy='16' r='16'></circle>
            <path d='M32 16c0-9.94-8.06-16-16-16'>
              <animateTransform
                attributeName='transform'
                type='rotate'
                from='0 16 16'
                to='360 16 16'
                dur='1s'
                repeatCount='indefinite'></animateTransform>
            </path>
          </g>
        </g>
      </svg>
    </div>
  )
}
