"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

// interactive component

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  const onClick = () => {
    // Add authentication before push
    // route guarding
    router.push(href);
  };

  return (
    // if we add group to the parent element, when we add hover group to a child element
    // watever we add to the child also affects the group parent, so if we hover over the parent
    // then the child will get is hover effect
    <button
      onClick={onClick}
      className=" relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4 border"
    >
      <div className=" relative min-h-[64px] min-w-[64px] border border-red-500">
        <Image src={image} alt={image} className=" object-cover" fill />
      </div>
      <p className=" font-medium truncate py-5">{name}</p>
      <div className=" absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <FaPlay className=" text-black" />
      </div>
    </button>
  );
};

export default ListItem;
