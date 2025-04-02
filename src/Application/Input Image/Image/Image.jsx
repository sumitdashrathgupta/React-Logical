import React, { useState } from "react";
import "./Style.css";
import { IoMdCloudUpload } from "react-icons/io";

const Image = () => {
  let [img, setImg] = useState("");

  let based64 = async (image) => {
    let imag = new FileReader();
    imag.readAsDataURL(image);
    let sadata = new Promise((res, rej) => {
      imag.onload = () => res(imag.result);
      imag.onerror = (err) => rej(err);
    });
    return sadata;
  };

  let handleevent = async (e) => {
    let image = e.target.files[0];
    let data_image = await based64(image);
    setImg(data_image);
  };

  console.log(img);
  return (
    <>
      <div className="contenar">
        <h2>Input Image</h2>
        <label htmlFor="image">
          <input type="file" name="file" id="image" onChange={handleevent} />
          {img ? <img src={img} /> : <IoMdCloudUpload className="icons" />}
        </label>
      </div>
    </>
  );
};

export default Image;
