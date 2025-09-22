import multer from "multer
const upload = multer()
 
app.post('/profile', (req, res) => {
    upload(req, res, (err) => {
      if (err) {
        // An error occurred when uploading
        return
      }
   
      // Everything went fine
    })
  })