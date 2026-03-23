// import Image from "next/image";

// interface ProfileCardProps {
//     imageSrc: string;
//     name: string;
//     title: string;
// }

// const ProfileCard: React.FC<ProfileCardProps> = ({ imageSrc, name, title }) => {
//     return (
//         <div className=" bg-white  rounded-xl   max-w-[416px]">
//             <div className="relative  h-[416px] w-full  rounded-[30px]">
//                 <Image
//                     src={imageSrc}
//                     alt={name}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-t-xl"
//                 />
//             </div>
//             <div className="">
//                 <h3 className="text-[32px] leading-[54px] font-semibold text-[#6F849E]">{name}</h3>
//                 <p className="text-[24px] leading-[40px] font-medium text-[#6F849E]">{title}</p>
//             </div>
//         </div>
//     );
// };

// export default ProfileCard;


import Image from "next/image";

interface ProfileCardProps {
    imageSrc: string;
    name: string;
    title: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageSrc, name, title }) => {
    return (
        <div className="bg-white   max-w-[416px] w-full overflow-hidden">
            {/* Image Wrapper */}
            <div className="relative w-full h-[416px]  rounded-[30px]">
                <Image
                    src={imageSrc}
                    alt={`${name} - ${title} at Eequate`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[30px]"
                />
            </div>

            {/* Content */}
            <div className="">
                <h3 className="text-[32px] leading-[54px] font-semibold text-[#6F849E]">{name}</h3>
                <p className="text-[24px] leading-[40px] font-medium text-[#6F849E]">{title}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
