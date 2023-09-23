import Image from "next/image";

const SimpleCardComponent = ({title, pathImage, alt}) => {

    return <>
        <div className={"flex flex-col p-[15] bg-[#D9D9D9] justify-center items-center rounded-sm w-1/2"}>
            <h3 className={"font-bold"}>
                {title}
            </h3>
            <div className={"flex bg-white h-40"}>
                <Image

                    src={pathImage}
                    alt={alt}
                    width={100}
                    height={24}
                    priority={false}
                />
            </div>
        </div>
    </>
}

export default SimpleCardComponent
