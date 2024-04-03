import React from 'react'

const ListComponent = (props) => {
    let { iconName, listTitlle, listDescrion, tag, tagContent } = props
    let TagNamie = tag
    const CustomIconTag = iconName
    return (
        <div className='flex w-full items-center justify-start py-5 md:px-5 md:py-3'>
            {
                CustomIconTag && <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-logo-color mr-1 md:mr-3'>
                    <CustomIconTag
                        style={{
                            color: "#fff",
                            fontSize: '20px'
                        }} />
                </div> || TagNamie &&
                <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center mr-1 md:mr-3'>
                  <TagNamie className="font-bold text-4xl text-blue-text-color text-center">{tagContent}</TagNamie>
                </div>
            }
            <div className='flex flex-col pl-3 md:pl-6 items-start justify-center'>
                <h4 className='font-bold text-lg capitalize text-logo-color'>{listTitlle}</h4>
                <p className='mt-[10px] capitalize font-bold text-xs'>{listDescrion}</p>
            </div>
        </div>
    )
}

export default ListComponent
