import { useRef, useState } from "react";
import { storage } from "../../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useDispatch } from "react-redux";
import { addProduct } from "@/rtk/app-slices/productsSlice";
import Image from "next/image";
import altProductImg from "../../../public/images/product-image.jpg";

export default function AddProduct() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [describtion, setDescribtion] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imageToPreview, setImageToPreview] = useState(null);
  const altProductImgRef = useRef();
  const imageInputRef = useRef();

  const rednerInputs = () => {
    setTitle("");
    setDescribtion("");
    setCategory("");
    setPrice("");
    setImageToPreview(null);
  };

  const uploadData = async (thumbnail) => {
    const product = {
      id: Date.now(),
      title,
      describtion,
      price,
      thumbnail,
      category,
    };

    dispatch(addProduct(product));
    rednerInputs();
  };

  const uploadImage = (e) => {
    e.preventDefault();
    if (!image) return false;
    const imageRef = ref(storage, `images/${image.name + Date.now()}`);
    uploadBytes(imageRef, image).then(() => {
      getDownloadURL(imageRef).then((url) => {
        uploadData(url);
      });
    });
  };

  return (
    <>
      <div>
        <form className="product-form">
          <Image
            src={imageToPreview ? imageToPreview : altProductImg}
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
                setImageToPreview(URL.createObjectURL(e.target.files[0]));
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
              id="cars"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="headphones">headphones</option>
              <option value="smart-watches">smart watches</option>
              <option value="bluetooth-speakers">bluetooth speakers</option>
              <option value="wireless-earpuds">wireless earpuds</option>
            </select>
          </div>
          <button onClick={uploadImage}>add product</button>
        </form>
      </div>
    </>
  );
}
