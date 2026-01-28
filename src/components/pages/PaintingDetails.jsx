import React, { useContext } from "react";
import { useParams } from "react-router";
import { ItemContext } from "../../context/ItemContext";
import { CartContext } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaintingDetails = () => {
  const { dummyPaintings } = useContext(ItemContext);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (painting) => {
    addToCart(painting);
    toast.success(`${painting.title} added to cart 🛒`, {
      position: "bottom-right",
      autoClose: 1000,
      theme: "dark",
    });
  };
  const painting = dummyPaintings.find((p) => p.id == id);
  if (!painting) return <p>Painting not found.</p>;

  return (
    <div className="flex flex-col justify-center items-center p-2">
      <h2 className="text-3xl font-serif sm:text-3xl md:text-4xl font-medium relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-gray-400 after:-mt-1  m-2">
        {painting.title}
      </h2>
      <div className="w-full object-contain p-2 flex justify-center">
        <img
          src={painting.image}
          alt={painting.title}
          className="w-full md:w-3/4 rounded-lg border border-gray-400 shadow-[0_0px_25px_rgba(0,0,0,30.7)]  object-cover"
        />
      </div>
      <div className="w-full object-contain flex flex-col items-center p-2  mt-4 gap-3 justify-center">
        <h2 className="text-2xl font-serif font-medium sm:text-2xl md:text-3xl  relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-gray-400 after:-mt-1 ">
          On Your Wall
        </h2>
        <img
          src={painting.rimage}
          alt={painting.title}
          className="w-full md:w1/2 rounded shadow-md object-cover"
        />
      </div>
      <div className="w-full object-contain flex flex-col items-center p-2 gap-2 justify-center">
        <h2 className="text-2xl mt-4 font-serif font-medium">About Painting</h2>
        <p>{painting.desc}</p>
      </div>
      <div className="items-center justify-center sticky bottom-4 flex">
        <button
          // onClick={() => addToCart(painting)}
          onClick={() => handleAddToCart(painting)}
          className="mt-3  gap-1 items-center justify-center flex bg-[#2e2856] hover:bg-[#4b3ea1] text-white font-medium px-4 py-2 rounded-lg shadow-md  hover:shadow-xl transition-all duration-300"
        >
          Add to Cart
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default PaintingDetails;

// const dummyPaintings = [
//   {
//     id: 1,
//     title: "Crises",
//     price: 1200,
//     size: "24x30 inch",
//     image: "/image2.jpg",
//     rimage: "/rimage7.jpg",
//     desc: "",
//   },
//   {
//     id: 2,
//     title: "Ocean Dreams",
//     price: 950,
//     size: "5x6 fit",
//     image: "/image3.jpg",
//     rimage: "/rimage3.jpg",
//     desc: "Fields glowing under sunlight in night ",
//   },
//   {
//     id: 3,
//     title: "Poor & Rich",
//     price: 1500,
//     size: "30x36 inch",
//     image: "/image1.jpg",
//     rimage: "/rimage1.jpg",
//     desc: "This painting visually explores the contrasting lives of children from rich and poor backgrounds, using vibrant, symbolic elements to highlight inequality and hope. At first glance, it depicts children together—playing, interacting, or dreaming—with a central motif (such as a folded Indian currency note, toys, and sweets) that unites the scene. Yet, subtle distinctions in clothing, posture, and the objects surrounding each group introduce the socio-economic divide: while some children appear carefree, others are marked by expressions of longing or resilience. The artwork draws inspiration from the paradoxes described in stories like Lost Spring, where childhood wonder is snatched away by poverty, and generational traditions often overshadow opportunity. By weaving playful and poignant imagery, the painting prompts viewers to reflect on childhood aspirations and the lasting impact of economic disparity, urging empathy and awareness.",
//   },
//   {
//     id: 4,
//     title: "Cat Sketch",
//     price: 1600,
//     size: "12x12 inch",
//     image: "/image4.jpg",
//     rimage: "/rimage4.jpg",
//     desc: " Rendered in bold ink lines, this elegant monochrome cat portrait emphasizes both realism and expressive mark-making. The detailed texture of fur and the intense gaze celebrate the character and beauty of felines. The artist’s signature in Devanagari script personalizes the work, making it a blend of cultural and artistic identity.",
//   },
//   {
//     id: 5,
//     title: "Mystic River",
//     price: 1800,
//     size: "36x48 inch",
//     image: "/image7.jpg",
//     rimage: "/rimage7.jpg",

//     desc: "Making file with my inspiratiion ansd make it. ",
//   },

//   {
//     id: 6,
//     title: "Cosmic Splash",
//     price: 1800,
//     size: "36x48 inch",
//     image: "/image6.jpg",
//     rimage: "/rimage6.jpg",

//     desc: " This abstract artwork uses dynamic splashes of vivid color—blacks, blues, pinks, and whites—to evoke the chaotic beauty of a cosmic or galactic event. The random interplay of paint creates the impression of stars, nebulae, and the universe’s mystery, inspiring awe and wonder. The abstract nature allows viewers to interpret it as a visual representation of infinite space and possibility",
//   },
// ];
