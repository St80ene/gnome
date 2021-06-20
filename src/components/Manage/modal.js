import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import Axios from "axios";
import { API } from "../../config";
import Swal from "sweetalert2";
import Loader from "react-loader-spinner";
import {useHistory} from 'react-router-dom';

const UpdateVideo = ({ show, handleClose, data }) => {
  const history = useHistory();
  const [title, setTitle] = React.useState(data.title);
  const [description, setDescription] = React.useState(data.description);
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

  const handleUpdateVideo = (e) => {
    e.preventDefault();
    setLoading(true);
    const id = data._id;
    Axios({
      method: "PUT",
      url: `${API}movies/${id}`,
      data: { title, description },
    })
      .then((res) => {
        console.log(res);
        setLoading(false);
        Toast.fire({
          icon: "success",
          title: "Updated Successfully",
        });
        history.push('/')
      })
      .catch((err) => {
        setLoading(false);
        Toast.fire({
          icon: "error",
          title: "Something Went Wrong",
        });
      });
  };
  return (
    <Modal
      show={show}
      //   size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      className="borderless"
      centered
    >
      <Modal.Body>
        <div className="d-flex">
          <div className="w-75 role">
            <Modal.Title>Update Video Information</Modal.Title>
          </div>
          <div className="w-25 text-right">
            <FaTimes onClick={handleClose} />
          </div>
        </div>
        {!loading ? (
          <Form>
            <Form.Group>
              <input
                type="text"
                placeholder="Title"
                className="mt-2 name-fields w-100"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <textarea
                name=""
                placeholder="Description"
                className="mt-2 name-fields w-100"
                id=""
                cols="30"
                rows="10"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <div className="text-right">
              <input type="hidden" value={data.publicId} />
              <Button
                onClick={(e) => handleUpdateVideo(e)}
                style={{ backgroundColor: "#007A6D" }}
                className="button"
              >
                Update
              </Button>
            </div>
          </Form>
        ) : (
          <div className="text-center">
            <Loader
              type="Rings"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default UpdateVideo;
