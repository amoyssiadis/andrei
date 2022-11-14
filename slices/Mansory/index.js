import React, { useState } from 'react'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import Image from 'next/image'
import GalleryModal from '../../components/GalleryModal'

const Mansory = ({ slice }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMedia, setModalMedia] = useState(null)
  
  function openMedia(item) {
    console.log("openMedia",item)
    //setModalMedia(item.video.url)
    setModalMedia(item)
    setModalOpen(true)
  }

  return (
  <section className='bg-black'>
    {/* <span> oneColumn { slice.primary.oneColumn ? 'true' : 'false' }</span> */}
    <div className="masonry  ">
      {/* sm:masonry-sm md:masonry-md */}
    { slice?.items?.map((item, i) => { 
      console.log(item.video) 
      // you might want to use a lib here (eg. react-oembed-container)
      const width = item.image.dimensions.width || 850
      const height = item.image.dimensions.height || 400
      
      return (<div className=' cursor-pointer hover:bg-gray-700 p-1' key={i}>
                <a onClick={() => openMedia(item)} >
                  <img className="" src={item.image.url} alt={item.image.alt} width={width} height={height}  />
                  {/* <div  dangerouslySetInnerHTML={{ __html: item.video.html }} />  */}

                </a>
              </div>)}) }
    </div>
    {modalMedia && (<GalleryModal media={modalMedia} isOpen={modalOpen} setIsOpen={setModalOpen} />)}
  </section>
)}

export default Mansory