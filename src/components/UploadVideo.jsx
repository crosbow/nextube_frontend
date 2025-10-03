import { useFetcher } from "react-router-dom";
import Modal from "./Modal";
import Button from "./ui/Button";
import Input from "./ui/Input";
import InputBox from "./ui/InputBox";
import Label from "./ui/Label";

const UploadVideo = ({ open, onClose }) => {
  const Fetcher = useFetcher();

  if (Fetcher.data?.success == 200) {
    onClose();
  }

  const isSubmitting = Fetcher.state === "submitting";
  return (
    <Modal open={open}>
      <h2 className="text-3xl text-center font-bold">Upload Video</h2>
      <Fetcher.Form
        method="POST"
        className="space-y-3 "
        encType="multipart/form-data"
      >
        <InputBox>
          <Label>Title</Label>
          <Input
            id="title"
            name="title"
            type="text"
            required
            className="text-3xl w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-500 text-white input-gradient-focus transition-all"
            placeholder="Title"
          />
        </InputBox>
        <InputBox>
          <Label>Description</Label>
          <textarea
            cols={5}
            name="description"
            placeholder="description here"
            required
            className="text-sm w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-500 text-white input-gradient-focus transition-all"
          />
        </InputBox>
        <InputBox>
          <Label>Import Video</Label>
          <Input
            id="video"
            name="video"
            type="file"
            accept="image/mp4"
            required
            className="text-3xl w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-500 text-white input-gradient-focus transition-all"
          />
        </InputBox>
        <InputBox>
          <Label>Import Thumbnail</Label>
          <Input
            id="thumbnail"
            name="thumbnail"
            type="file"
            required
            className="text-3xl w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 placeholder-gray-500 text-white input-gradient-focus transition-all"
          />
        </InputBox>

        <Button variant="primary">
          {isSubmitting ? "Uploading..." : "Upload Now"}
        </Button>
        <Button onClick={onClose} variant="ghost">
          close
        </Button>
      </Fetcher.Form>
    </Modal>
  );
};
export default UploadVideo;
