// import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
// import axios from "axios";
// import TextareaAutosize from '@mui/material/TextareaAutosize';

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useStyles } from "./utils";

// const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
// const AddBlogs = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();
//   const [inputs, setInputs] = useState({
//     title: "",
//     description: "",
//     imageURL: "",
//   });
//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   const sendRequest = async () => {
//     const res = await axios
//       .post("http://localhost:5000/api/blogs/add", {
//         title: inputs.title,
//         desc: inputs.description,
//         img: inputs.imageURL,
//         user: localStorage.getItem("userId"),
//       })
//       .catch((err) => console.log(err));
//     const data = res.data;
//     return data;
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//     sendRequest()
//       .then((data) => console.log(data))
//       .then(() => navigate("/blogs"));
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Box
//           borderRadius={10}
//           boxShadow="10px 10px 20px #ccc"
//           padding={3}
//           margin={"normal"}
//           marginTop={3}
//           display="flex"
//           flexDirection={"column"}
//           width={"80%"}
//         >
//           <Typography
//             className={classes.font}
          
//             padding={3}
//             color="grey"
//             variant="h2"
//             textAlign={"center"}
//           >
//             Post Your Blog
//           </Typography>
//           <InputLabel className={classes.font} sx={labelStyles}>
//             Title
//           </InputLabel>
//           <TextField
//             className={classes.font}
//             name="title"
//             onChange={handleChange}
//             value={inputs.title}
//             margin="normal"
//             variant="outlined"
//           />
//           <InputLabel className={classes.font} sx={labelStyles}>
//             Description
//           </InputLabel>
//           <TextareaAutosize
//             className={classes.font}
//             name="description"
//             onChange={handleChange}
//             minRows={10}
//             margin="normal"
//             variant="outlined"
//             value={inputs.description}
//           />
//           <InputLabel className={classes.font} sx={labelStyles}>
//             ImageURL
//           </InputLabel>
//           <TextField
//             className={classes.font}
//             name="imageURL"
//             onChange={handleChange}
//             value={inputs.imageURL}
//             margin="normal"
//             variant="outlined"
//           />
//           <Button
//             sx={{ mt: 2, borderRadius: 4 }}
//             variant="contained"
            
//             type="submit"
//           >
//             Submit
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// };

// export default AddBlogs;


import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./utils";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const AddBlogs = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/blogs/add", {
        title: inputs.title,
        desc: inputs.description,
        img: inputs.imageURL,
        user: localStorage.getItem("userId"),
      });
      return res.data;
    } catch (err) {
      console.error(err);
      // Optionally handle the error here
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => {
        if (data) {
          console.log(data);
          navigate("/blogs");
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"normal"}
          marginTop={3}
          display="flex"
          flexDirection={"column"}
          width={"80%"}
        >
          <Typography
            className={classes.font}
            padding={3}
            color="grey"
            variant="h2"
            textAlign={"center"}
          >
            Post Your Blog
          </Typography>
          <InputLabel className={classes.font} sx={labelStyles}>
            Title
          </InputLabel>
          <TextField
            className={classes.font}
            name="title"
            onChange={handleChange}
            value={inputs.title}
            margin="normal"
            variant="outlined"
          />
          <InputLabel className={classes.font} sx={labelStyles}>
            Description
          </InputLabel>
          <TextareaAutosize
            className={classes.font}
            name="description"
            onChange={handleChange}
            minRows={10}
            style={{
              margin: '16px 0',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
            value={inputs.description}
          />
          <InputLabel className={classes.font} sx={labelStyles}>
            ImageURL
          </InputLabel>
          <TextField
            className={classes.font}
            name="imageURL"
            onChange={handleChange}
            value={inputs.imageURL}
            margin="normal"
            variant="outlined"
          />
          <Button
            sx={{ mt: 2, borderRadius: 4 }}
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBlogs;
