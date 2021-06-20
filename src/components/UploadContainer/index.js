import React from "react";
import {useHistory} from 'react-router-dom';
import { UploadContainer, UploadContentHeading, UploadWrapper } from "./styles";
import { FaTimes } from "react-icons/fa";
import Axios from "axios";
import "./styles.css";
import Swal from "sweetalert2";
import { API } from "../../config";
import Loader from "react-loader-spinner";

const UploadPage = () => {
  const history = useHistory();
  const [videoFile, setVideoFile] = React.useState(null);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const clickSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("text", title);
    formData.append("text", description);

    Axios({
      method: "post",
      url: `${API}movies/upload`,
      data: formData,
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res);
        setLoading(false);
        Toast.fire({
          icon: "success",
          title: "uploaded successfully",
        });
        history.push('/');
      })
      .catch((err) => {
        setLoading(false);
        Toast.fire({
          icon: "error",
          title: "Upload Failed",
        });
      });
  };
  return (
    <>
      <UploadWrapper>
        <UploadContainer>
          <UploadContentHeading>
            <div>
              <span>Upload Video</span>
            </div>
            <div>
              <FaTimes />
            </div>
          </UploadContentHeading>
          {!loading ? (
            <div className="UploadVideoContainer">
              <div className="titleContainer">
                <label>Title:</label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  name="title"
                  type="text"
                  placeholder="Title..."
                  value={title}
                />
              </div>

              <div className="descriptionContainer">
                <label>Description:</label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                  value={description}
                  placeholder="Description..."
                />
              </div>
              <div className="bottomSection">
                <div className="thumbnailContainer">
                  <input
                    type="file"
                    name="video"
                    accept="video/mp4"
                    onChange={(e) => setVideoFile(e.target.files[0])}
                    style={{ display: "none" }}
                    id="uploadThumbnail"
                  />
                  <div id="uploadThumbnail">
                    <label htmlFor="uploadThumbnail"> - Choose File - </label>
                  </div>
                </div>
                <div className="uploadButtonContainer">
                  <button onClick={clickSubmit}> Upload Video</button>
                </div>
              </div>
            </div>
          ) : (
            <div style={{marginTop:60}} className="text-center">
              <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
              />
            </div>
          )}
        </UploadContainer>
      </UploadWrapper>
    </>
  );
};

export default UploadPage;
