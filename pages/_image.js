import Image from 'next/image';

const _image = () => {
   return (
      <Image
         src="./public/images/profile.jpg"
         height={400}
         width={400}
         alt="Federico Berbara">
      </Image>
   )
}

export default _image;
