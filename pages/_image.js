import Image from 'next/image';

export const _image = () => {
   return (
      <Image
         src="./public/images/profile.jpg"
         height={400}
         width={400}
         alt="Federico Berbara">
      </Image>
   )
}
