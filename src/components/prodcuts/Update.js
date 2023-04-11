import { useRef, useState } from "react";
import { storage } from "../../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "@/rtk/app-slices/productsSlice";
import Image from "next/image";
import altProductImg from "../../../public/images/product-image.jpg"

export default function UpdateProduct() {
  const dispatch = useDispatch();
  const updatingProduct = useSelector(
    (state) => state.products.updatingProduct
  );
  const [title, setTitle] = useState(updatingProduct.title);
  const [describtion, setDescribtion] = useState(updatingProduct.describtion);
  const [category, setCategory] = useState(updatingProduct.category);
  const [price, setPrice] = useState(updatingProduct.price);
  const [image, setImage] = useState(null);
  const [oldImage, setOldImage] = useState(updatingProduct.thumbnail)
  const altProductImgRef = useRef();
  const imageInputRef = useRef();

  const updateData = async (thumbnail) => {
    if (thumbnail === null) {
      thumbnail = updatingProduct.thumbnail
    }
    const product = {
      id: updatingProduct.id,
      title,
      describtion,
      price,
      category,
      thumbnail,
    };

    dispatch(updateProduct(product));
  };

  const updateImage = async (e) => {
    e.preventDefault();
    if (image) {
      const imageRef = ref(storage, `images/${image.name + Date.now()}`);
      uploadBytes(imageRef, image).then(() => {
        getDownloadURL(imageRef).then((url) => {
          updateData(url);
          setOldImage(url);
        });
      });
    } else {
      updateData(null);
    }
  };

  return (
    <>
      <div>
        <form className="product-form">
          <Image
            src={oldImage ? oldImage : altProductImg}
            alt="product image"
            width="230"
            height="230"
            ref={altProductImgRef}
            onClick={() => {
              imageInputRef.current.click();
            }}
          />
          <input
            type="file"
            name="image"
            onChange={(e) => {
              setImage(e.target.files[0]);
              e.target.files &&
                setOldImage(URL.createObjectURL(e.target.files[0]));
            }}
            ref={imageInputRef}
            className="hidden"
          />
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            name="describtion"
            placeholder="describtion"
            onChange={(e) => setDescribtion(e.target.value)}
            value={describtion}
          />
          <div>
            <input
              type="text"
              name="price"
              placeholder="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <select
              name="category"
              placeholder="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="headphones">headphones</option>
              <option value="smart-watches">smart-watches</option>
              <option value="bluetooth-speakers">bluetooth-speakers</option>
              <option value="wireless-earpuds">wireless-earpuds</option>
            </select>
          </div>
          <button onClick={updateImage}>update product</button>
        </form>
      </div>
    </>
  );
}
