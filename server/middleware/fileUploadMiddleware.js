import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, "./uploads");
  },
  filename: function (_req, _file, cb) {
    const uniqueSuffix = uuidv4();
    cb(null, uniqueSuffix + ".jpg");
  },
});

const upload = multer({ storage: storage });

export default upload.single("image");
